function capitalize(text) {
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);
    return firstLetter.toUpperCase() + rest;
  }
  const capitalizeEachWord = (text) => {
    const words = text.split(" ");
    const wordsCapitalized = words.map(word => capitalize(word));
    return wordsCapitalized.join(" ");
  }

  module.exports = {
    capitalize,
    capitalizeEachWord
  }