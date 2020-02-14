console.log('madlib script has loaded');

// write this function!
  function madlib(userNoun, userVerb, userAdj) {
  var theSentence;

  // working using the switch case statment
  switch (true) {
    case userNoun.length < userVerb.length:
      theSentence =
        "When The" +
        " " +
        userAdj +
        " " +
        "rain falls," +
        " " +
        userNoun +
        " " +
        "begins to" +
        " " +
        userVerb;
      return theSentence;

      break;

    case userNoun.length > userVerb.length:
      theSentence =
        "The" +
        " " +
        userAdj +
        " " +
        userNoun +
        " " +
        "loves to" +
        " " +
        userVerb +
        " " +
        " in the summer";

      return theSentence;

      break;

    default:
      theSentence = "So Sorry, both your noun and verb have the same length ";
      return theSentence;
  }

  /*

  //working using if statment 
  
  if (userNoun.length > userVerb.length) {
    theSentence =
      "The" +
      " " +
      userAdj +
      " " +
      userNoun +
      " " +
      "loves to" +
      " " +
      userVerb +
      " " +
      " in the summer";

    return theSentence;
  } else if (userNoun.length < userVerb.length) {
    theSentence =
      "When The" +
      " " +
      userAdj +
      " " +
      "rain falls," +
      " " +
      userNoun +
      " " +
      "begins to" +
      " " +
      userVerb;
    return theSentence;
  } else {
    theSentence = "Sorry, both your noun and verb have the same length ";
    return theSentence;
  }*/
}


// if the noun is longer than the verb
console.assert(madlib('horse', 'walk', 'red') === 'the red horse loves to walk in the summer', 'first');
console.assert(madlib('schoolbus', 'drive', 'flat') === 'the flat schoolbus loves to drive in the summer', 'second');
console.assert(madlib('steel', 'melt', 'smooth') === 'the smooth steel loves to melt in the summer', 'third');

// else the verb is longer than the noun
console.assert(madlib('steel', 'freeze', 'smooth') === 'when the smooth rain falls, steel begins to freeze', 'fourth');
console.assert(madlib('mice', 'wander', 'orange') === 'when the orange rain falls, mice begins to wander', 'fifth');
console.assert(madlib('car', 'migrate', 'scratchy') === 'when the scratchy rain falls, car begins to migrate', 'sixth');


function madlibHandler() {
  // prompt the user for a noun, verb and adjective
  const userNoun = prompt('enter a noun');
  const userVerb = prompt('enter a verb');
  const userAdj = prompt('enter an adjective');

  // perform core logic
  const result = madlib(userNoun, userVerb, userAdj);

  // alert result for the user
  alert(result);

  // log action for the developer
  console.log('\n--- madlib ---');
  console.log('userNoun:', '(' + typeof userNoun + '),', userNoun);
  console.log('userVerb:', '(' + typeof userVerb + '),', userVerb);
  console.log('userAdj:', '(' + typeof userAdj + '),', userAdj);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('madlib-button').addEventListener('click', madlibHandler);
