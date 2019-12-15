var sq = require('sqlite3');
sq.verbose();

var db = new sq.Database(__dirname + '/touslesmessages.db3');

db.each("SELECT * FROM message", function(err, row) {
    if (err) {
        console.log(err);
    } else {
        console.log(row.nom + " a écrit '" + row.content + "'");
    }
});