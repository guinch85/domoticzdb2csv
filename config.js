let dbFile = "domoticz.db";
// let dbFile = "/home/pi/domoticz/domoticz.db";
let csvMeterFilePrefix = "domoticzMeter";
let csvTempFilePrefix = "domoticzTemp";
let csvHygroFilePrefix = "domoticzHygro";
let ftpConfig = {
    host: "192.168.85.6",
    port: 21,
    user: 'Home',
    password: 'ludi2400'
}
let idxTable = [
    // RaspEDF
    {
        idx: 125,
        name: "EDF - Ampère",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 126,
        name: "EDF - Heures creuses",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 127,
        name: "EDF - Heures pleines",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 128,
        name: "EDF - Puissance",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1570,
        name: "Départ ballon ECS",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1571,
        name: "Départ chaudière",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1572,
        name: "Départ PC bureau",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1575,
        name: "Onduleur - Puissance",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1580,
        name: "Onduleur - Energie",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1581,
        name: "Général PC",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1582,
        name: "Général ECL",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1583,
        name: "Général Plaque",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1584,
        name: "Départ VMC",
        table: "Meter",
        sensor: "Counter"
    },
    {
        idx: 1585,
        name: "Départ baie info",
        table: "Meter",
        sensor: "Counter"
    },



    //RfxCom
    {
        idx: 1558,
        name: "Chambre 2",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1561,
        name: "Garage",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1562,
        name: "Exterieure",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1563,
        name: "Chambre 1",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    //Jeedom home
    {
        idx: 943,
        name: "Température bureau",
        table: "Temperature",
        sensor: "Temp"
    },
    {
        idx: 944,
        name: "Hygrométrie bureau",
        table: "Temperature",
        sensor: "Hygro"
    },
    {
        idx: 951,
        name: "Température salle de bain",
        table: "Temperature",
        sensor: "Temp"
    },
    {
        idx: 952,
        name: "Hygrométrie salle de bain",
        table: "Temperature",
        sensor: "Hygro"
    },
    {
        idx: 953,
        name: "Température cuisine",
        table: "Temperature",
        sensor: "Temp"
    },
    {
        idx: 954,
        name: "Hygrométrie cuisine",
        table: "Temperature",
        sensor: "Hygro"
    },
    {
        idx: 1546,
        name: "Température salon",
        table: "Temperature",
        sensor: "Temp"
    },
    {
        idx: 1547,
        name: "Hygrométrie salon",
        table: "Temperature",
        sensor: "Hygro"
    },
    //Jeedom extension
    {
        idx: 1036,
        name: "Température extension 1",
        table: "Temperature",
        sensor: "Temp"
    },
    {
        idx: 1037,
        name: "Hygrométrie extension 1",
        table: "Temperature",
        sensor: "Hygro"
    }
]

module.exports = {
    ftpConfig,
    idxTable,
    dbFile,
    csvMeterFilePrefix,
    csvTempFilePrefix,
    csvHygroFilePrefix
};
