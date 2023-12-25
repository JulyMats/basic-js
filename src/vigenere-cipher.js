const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let square = [];
      for (let i = 0; i < a.length; i++) {
        square.push(a.slice(i).concat(a.slice(0, i)));
      }
    this.a = a;
    this.square = square;
  }
  encrypt(message, key) {
  if (arguments.length == 2 & message !== undefined & key !== undefined) {

    let messageCut = message.replaceAll(' ', '').replaceAll(/[^A-Za-z]+/g, '').toUpperCase();
    let messageKey = key.repeat(Math.ceil(message.length / key.length)).slice(0, messageCut.length).toUpperCase();

    let messageEncrypt = "";

    for (let k = 0; k < messageCut.length; k++) {
      let i = this.a.indexOf(messageCut[k]);
      let j = this.a.indexOf(messageKey[k]);
      messageEncrypt = messageEncrypt + this.square[i][j];
  }
  messageEncrypt = messageEncrypt.split('');

  for (let m = 0; m < message.length; m++) {
    if (!message[m].search(/[^A-Za-z]+/g)) {
      messageEncrypt.splice(m, 0, message[m])}
  };
if (this.mode) {
  return messageEncrypt.join('');
} else {
  return messageEncrypt.reverse().join('');
}
}
throw new Error('Incorrect arguments!');
}
  decrypt(message, key) {
    if (arguments.length == 2 & message !== undefined & key !== undefined) {

        let messageCut = message.replaceAll(' ', '').replaceAll(/[^A-Za-z]+/g, '').toUpperCase();
        let messageKey = key.repeat(Math.ceil(message.length / key.length)).slice(0, messageCut.length).toUpperCase();
    
        let messageDecrypt = "";
    
        for (let k = 0; k < messageCut.length; k++) {
          let i = this.a.indexOf(messageKey[k]);
          let j = this.square[i].indexOf(messageCut[k]);
          messageDecrypt = messageDecrypt + this.a[j];
      }
      messageDecrypt = messageDecrypt.split('');
    
      for (let m = 0; m < message.length; m++) {
        if (!message[m].search(/[^A-Za-z]+/g)) {
          messageDecrypt.splice(m, 0, message[m])}
      };
    
      if (this.mode) {
        return messageDecrypt.join('');
      } else {
        return messageDecrypt.reverse().join('');
      }
  }
  throw new Error('Incorrect arguments!');
}
}

module.exports = {
  VigenereCipheringMachine
};
