function repeatedWord(str) {
  const lowerCase = str.toLowerCase();
  const noPunc = lowerCase.replace(/[^\w\s]/g, '');
  const wordArr = noPunc.split(' ');
  let result = {};
  for(let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    if(!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
    if(result[word] > 1) {
      return word;
    }
  }
}

module.exports = repeatedWord;
