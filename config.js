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
    {
        idx: 1587,
        name: "Ext - Général PC",
        table: "Meter",
        sensor: "Counter"
    },



    //RfxCom
    {
        idx: 1628,
        name: "Garage",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1627,
        name: "Exterieure",
        table: "Temperature",
        sensor: "Temp+Hr"
    },


    //Zigbee
    {
        idx: 1599,
        name: "Capteur bureau",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1605,
        name: "Capteur chambre 1",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1606,
        name: "Capteur chambre 2",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1602,
        name: "Capteur cuisine",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1603,
        name: "Capteur salle de bain",
        table: "Temperature",
        sensor: "Temp+Hr"
    },
    {
        idx: 1598,
        name: "Capteur salon",
        table: "Temperature",
        sensor: "Temp+Hr"
    },


    //Jeedom extension
    {
        idx: 1607,
        name: "Capteur extension",
        table: "Temperature",
        sensor: "Temp+Hr"
    },

]

module.exports = {
    ftpConfig,
    idxTable,
    dbFile,
    csvMeterFilePrefix,
    csvTempFilePrefix,
    csvHygroFilePrefix
};
