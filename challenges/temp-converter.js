console.log('tempConverter script has loaded');

// write this function!
function tempConverter(temperature, degrees) {
  userDegrees = degrees.toString();
  if (userDegrees === "f") {
    return (temperature * 9/5) + 32;
  }
  else if (userDegrees === "c") {
    return (temperature - 32) * 5/9;
  }
  else {
    return userDegrees+" not supportd";
  }
 
  /*
  switch (true) {
    case(userDegrees === 'f'):
      return (temperature * 9/5) + 32;
      break;
    case(userDegrees === 'c'):
      return (temperature - 32) * 5/9;
      break;
    default:
      return "please enter valid";
      break;

  }*/
}

// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === 32, 'fourth');
console.assert(tempConverter(4, 'celcius') === 39.2, 'fifth');
console.assert(tempConverter(12.4, 'celcius') === 54.32, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegrees = prompt('would you like to convert to farenheit or celcius?');

  console.assert(typeof userDegrees === 'number', "don't forget to cast userDegrees to a string!");

 // perform core logic
  // write this line!
  const result = tempConverter(userTempStr, userDegrees);

  // alert result for the user
  // write this line!
  alert(result);

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
