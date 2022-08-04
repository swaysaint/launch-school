//MADLIBS

const readline = require('readline-sync');

function getInput() {
  let response = {};
  console.log('Enter a noun: ');
  response.noun = readline.prompt();
  console.log('Enter a verb: ');
  response.verb = readline.prompt();
  console.log('Enter an adjective: ');
  response.adjective = readline.prompt();
  console.log('Enter an adverb: ');
  response.adverb = readline.prompt();
  return response;
}

function madLib() {
  let input = getInput();
  console.log(
    `The ${input.adjective} ${input.noun} really loves to ${input.verb} ${input.adverb}.`);
}

madLib();

