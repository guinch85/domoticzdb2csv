let config = require('./config');
let sq = require('sqlite3');
let jsonExport = require('jsonexport');
const fs = require('fs');
const path = require('path')
const FTPClient = require('ftp');

sq.verbose();
let db = new sq.Database(config.dbFile);

let start = function () {
    console.log("Start read db function");

    let promiseList = [];

    let idxList = config.idxTable;
    for (let item of idxList) {
        let query = "SELECT * FROM " + item.table + " WHERE DeviceRowId=" + item.idx;
        console.log(query);
        const dbPromise = new Promise((resolve, reject) => {
            db.all(query, function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    if (rows.length > 0) {
                        if (item.sensor === "Counter") {
                            const exportCsv = new Promise((resolve, reject) => {
                                jsonExport(rows, (err, csv) => {
                                    if (err) reject(err);
                                    fs.writeFileSync('./export/' + config.csvMeterFilePrefix + rows[0].DeviceRowID + ".csv", csv)
                                    // console.log("CSV file " + item.name + " ready!");
                                    resolve();
                                })
                            });
                            promiseList.push(exportCsv);
                        }
                        if (item.sensor === "Temp" || item.sensor === "Temp+Hr") {
                            const exportCsv = new Promise((resolve, reject) => {
                                jsonExport(rows, (err, csv) => {
                                    if (err) reject(err);
                                    fs.writeFileSync('./export/' + config.csvTempFilePrefix + rows[0].DeviceRowID + ".csv", csv)
                                    // console.log("CSV file " + item.name + " ready!");
                                    resolve();
                                })
                            });
                            promiseList.push(exportCsv);
                        }
                        if (item.sensor === "Hygro" || item.sensor === "Temp+Hr") {
                            for (let j in rows) {
                                let id = rows[j].DeviceRowID;
                                rows[j].DeviceRowID = id + '_Hr';
                            }
                            const exportCsv = new Promise((resolve, reject) => {
                                jsonExport(rows, (err, csv) => {
                                    if (err) reject(err);
                                    fs.writeFileSync('./export/' + config.csvHygroFilePrefix + rows[0].DeviceRowID + ".csv", csv)
                                    // console.log("CSV file " + item.name + " ready!");
                                    resolve();
                                })
                            });
                            promiseList.push(exportCsv);
                        }

                    } else {
                        console.log("No data for item");
                        console.log(item)
                    }
                }
                resolve();
            })
        });
        promiseList.push(dbPromise);
    }


    Promise.all(promiseList).then(() => {
        console.log("All files is ready for send");
        let ftpClient = new FTPClient();

        ftpClient.connect(config.ftpConfig);

        ftpClient.on('ready', function () {
            const exportPath = path.join(__dirname, '/export');
            fs.readdir(exportPath, function (err, files) {
                if (err) console.log(err);
                else {
                    let csvFiles = files.filter(el => path.extname(el) === '.csv');
                    for (let f = 0; f < csvFiles.length; f++) {
                        let file = csvFiles[f];
                        // console.log(file);
                        ftpClient.put('export/' + file, file, function (err) {
                            if (err) console.log(err);
                            console.log("File " + file + " sent successfully");
                            if (f === csvFiles.length - 1) ftpClient.end();
                        });
                    }
                }
            })
        });
    });

}

start();