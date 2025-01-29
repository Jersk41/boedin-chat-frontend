// Shared utility for chat components
const chatUtils = {
  // Precompiled bad words regex patterns
  badWords: {
    patterns: [
      'anjing', 'kontol', 'jancuk', 'nigga', 'fuck'
      // Add more bad words here
    ].map(word => ({
      word,
      regex: new RegExp(`\\b${word.split('').map((c,i) => i === 0 || i === word.length-1 ? c : '[a-z]*').join('')}\\b`,'gi')
    })),
    
    filter: (text) => {
      if (!text) return '';
      
      let filtered = text;
      chatUtils.badWords.patterns.forEach(({_word, regex}) => {
        filtered = filtered.replace(regex, match => 
          `${match[0]}${'*'.repeat(match.length-2)}${match[match.length-1]}`
        );
      });
      return filtered;
    }
  },
  detectTextIsLong: (text) => {
    return (text.length > 100) ? true : false;
  }
};

export default chatUtils;