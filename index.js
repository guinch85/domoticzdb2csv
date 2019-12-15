let config = require('./config');
let sq = require('sqlite3');
let jsonExport = require('jsonexport');
const fs = require('fs');

sq.verbose();
let db = new sq.Database(config.dbfile);

let queryMeter = "";
for (let i = 0; i < config.listIdxMeter.length; i++) {
    if (i > 0) queryMeter += " OR";
    queryMeter += " DeviceRowId=" + config.listIdxMeter[i];
}
db.all("SELECT * FROM Meter where" + queryMeter, function (err, rows) {
    if (err) {
        console.log(err);
    } else {
        jsonExport(rows, (err, csv) => {
            if (err) return console.log(err);
            // console.log(csv);
            fs.writeFile('./export/' + config.csvMeterFileName, csv, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                console.log('CSV Meter saved!');
            });
        })
    }
});



let queryTemp = "";
for (let i = 0; i < config.listIdxTemp.length; i++) {
    if (i > 0) queryTemp += " OR";
    queryTemp += " DeviceRowId=" + config.listIdxTemp[i];
}
db.all("SELECT * FROM Temperature where" + queryTemp, function (err, rows) {
    if (err) {
        console.log(err);
    } else {
        jsonExport(rows, (err, csv) => {
            if (err) return console.log(err);
            // console.log(csv);
            fs.writeFile('./export/' + config.csvTempFileName, csv, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                console.log('CSV Temp saved!');
            });
        })
    }
});