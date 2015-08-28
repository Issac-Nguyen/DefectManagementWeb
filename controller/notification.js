var apn = require('apn');

var options = {
    cert: './cert.pem',
    key: './key.pem',
    // passphrase: '12345'
};

var apnConnection = new apn.Connection(options);

var note = new apn.Notification();

// note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
// note.sound = "ping.aiff";
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {
    'messageFrom': Date.now().toString()
};

note.foreground = "1";

function sendNotification(token, cb) {

    var myDevice = new apn.Device(token);
    apnConnection.pushNotification(note, myDevice);
    if (cb)
        cb();
}

module.exports = {
    sendNotification: sendNotification
}