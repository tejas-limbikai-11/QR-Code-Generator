let QRCode = require('qrcode');

QRCode.toFile(
    './qr.png', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    {
        color: {
            dark: '#00F',
            light: '#0000',
        },
    },
    function(err) {
        if(err) throw err;
        console.log('done');
    }
);