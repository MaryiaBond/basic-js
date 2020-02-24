class VigenereCipheringMachine {
    constructor(decode) {
        this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      decode ? decode = true : decode = false
    
    }
    
        encrypt(text, key, decode) {
          let alpha = this.alphabet
            function ordA(a) {
                return alpha.indexOf(a);
            }
            let i = 0, b;
            
            return text.toUpperCase().replace(/[^A-Z[^\s\.]+]/g, '').replace(/[A-Z]/g, function(a) {
                b = key[i++ % key.length];
                return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
            });
        }
    
        decrypt(text, key, decode) {
          let alpha = this.alphabet
            function ordA(a) {
                return alpha.indexOf(a);
            }
            let i = 0, b;
          
            return text.toUpperCase().replace(/[^A-Z[^\s\.]+]/g, '').replace(/[A-Z]/g, function(a) {
                b = key[i++ % key.length]; 
                return String.fromCharCode(((ordA(a) - (decode ? 26 + ordA(b) : ordA(b))) % 26 + 65));
            });
        }
    }



module.exports = VigenereCipheringMachine;
