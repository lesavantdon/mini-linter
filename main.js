let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(" ");
let overUsedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let punctuation = ['.','!'];
console.log(storyWords.length);
//console.log(storyWords);

//step 3 unnecessary iterate array to filter out words in an array betterWords
const betterWords = storyWords.filter(word => {
  return unnecessaryWords.includes(word) === false;
});
console.log (betterWords);

const overUsedWordsCount = storyWords.filter(word => {
  if (overUsedWords.includes(word) === storyWords.includes(word)) {
    return true
  }
});
console.log(overUsedWordsCount.length);

var sentenceCount = storyWords.filter(word => {
  return word.endsWith('.') === true || word.endsWith('!') === true;
});
console.log(sentenceCount.length);

console.log(betterWords.join(' '));

//1. overused words every other time


//2. write an function that finds the word that appears the greatest number of times


//3. replaced overused words with something else
var spliceFunction = overUsedWords.splice(0,3, 'sexy', 'red', 'dress')
console.log(overUsedWords);

