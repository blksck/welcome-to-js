'use strict';

let input = prompt('belkis ocak:');

let greeting = '';
if (input === null) {
  greeting = 'hello world.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);



/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
