let config = require('./config');
let sq = require('sqlite3');
let jsonExport = require('jsonexport');
const fs = require('fs');

sq.verbose();
let db = new sq.Database(config.dbfile);

let query = "";
for (let i = 0; i < config.listIdx.length; i++) {
    if (i > 0) query += " OR";
    query += " DeviceRowId=" + config.listIdx[i];
}

// console.log(query);

db.all("SELECT * FROM Meter where" + query, function (err, rows) {
    if (err) {
        console.log(err);
    } else {
        jsonExport(rows, (err, csv) => {
            if (err) return console.log(err);
            // console.log(csv);
            fs.writeFile('./export/' + config.csvFileName, csv, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                console.log('CSV saved!');
            });
        })
    }
});