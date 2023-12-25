const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repTimes = 'repeatTimes' in options ? options['repeatTimes'] : 1;
  let sep = 'separator' in options ? options['separator'] : '+';
  let add = 'addition' in options ? String(options['addition']) : '';
  let addRepTimes  = 'additionRepeatTimes' in options ? options['additionRepeatTimes'] : 1;
  let addSep  = 'additionSeparator' in options ? options['additionSeparator'] : '|';

  let newStr = Array(addRepTimes).fill(add).join(addSep);
  return Array(repTimes).fill(str + newStr).join(sep);
}

module.exports = {
  repeater
};
