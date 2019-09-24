// timer1.js
// Graeme Nickerson
// September 24, 2019

// Gets the arguments from the comand line
const args = process.argv.slice(2);

// Plays a sound after specified number of seconds
const timer = function(alarms) {
  if (alarms[0] >= 0 ) {
    setTimeout(() => {
      process.stdout.write('\x07');
      timer(alarms.slice(1));
    }, 1000 * Number(alarms[0]));
  }
};


timer(args);
