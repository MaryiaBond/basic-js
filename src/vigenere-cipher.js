class VigenereCipheringMachine {
    constructor(decode) {
        this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
        decode ? decode = true : decode = false

    }

    encrypt(text, key, decode) {
        function ordA(a) {
            return a.charCodeAt(0) - 65;
        }
        var i = 0, b;
        key = key.toUpperCase().replace(/[^A-Z]/g, '');
        return text.toUpperCase().replace(/[^A-Z[^\s\.]+]/g, '').replace(/[A-Z]/g, function(a) {
            b = key[i++ % key.length];
            return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
        });
    }

    decrypt(text, key, decode) {
        function ordA(a) {
            return a.charCodeAt(0) - 65;
        }
        var i = 0, b;
        key = key.toUpperCase().replace(/[^A-Z[^\s\.]+]/g, '');
        return text.toUpperCase().replace(/[^A-Z[^\s\.]+]/g, '').replace(/[A-Z]/g, function(a) {
            b = key[i++ % key.length];
            return String.fromCodePoint(((ordA(a) - (decode ? 26 + ordA(b) : ordA(b))) % 26 + 65));
        });
    }
}



module.exports = VigenereCipheringMachine;
