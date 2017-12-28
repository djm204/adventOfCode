const _ = require('lodash');
const data = require('./day3Data');

const arrayOfPhrases = data.split(/\r?\n/);
let valid = 0;

_.forEach(arrayOfPhrases, phrase => {
    let splitPhrase = phrase.split(' ');
    if(splitPhrase.length === _.uniq(splitPhrase).length){
        valid++;
    }
});
console.log(valid)