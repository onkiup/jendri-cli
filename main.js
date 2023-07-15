const commands = {
  init: function() {
    require('./init.js').apply(this);
  }
}

if (process.argv.length > 2) {
  console.log("Launching", process.argv[2])
  commands[process.argv[2]].apply(process.argv.slice(3));
  process.exit(0);
}

console.log("help?");

