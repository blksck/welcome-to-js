'use strict';

// you can copy-type this into the challenge files if you get too lost

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortStrings = 'short:';
let mediumStrings = 'medium:';
let longStrings = 'long:';

while (true) {
  let input = prompt('enter something');

  if (input === null) {
    break;
  }

  if (input.length < 5) {
    shortStrings = shortStrings + '\n- "' + input + '"';
  } else if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);
