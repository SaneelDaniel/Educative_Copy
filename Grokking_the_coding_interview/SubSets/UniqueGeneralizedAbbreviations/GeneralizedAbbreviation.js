const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class AbbreviatedWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}


function generate_generalized_abbreviation(word) {
  let wordLen = word.length,
    result = [];
  const queue = new Deque();
  queue.push(new AbbreviatedWord('', 0, 0));
  while (queue.length > 0) {
    const abWord = queue.shift();
    if (abWord.start === wordLen) {
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }
      result.push(abWord.str);
    } else {
      // continue abbreviating by incrementing the current abbreviation count
      queue.push(new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1));

      // restart abbreviating, append the count and the current character to the string
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }

      let newWord = abWord.str + word[abWord.start]
      queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));
    }
  }
  return result;
}


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);