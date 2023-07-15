const fs = require('fs');
const { execSync } = require('child_process')

module.exports = function() {
  if (this.length > 0) {
    if (fs.existsSync(this[0])) {
      fs.rmdirSync(this[0], {
        recursive: true,
        force: true
      })
    }
  }
  execSync("git clone --depth=1 git@github.com:onkiup/jendri.git " + this[0]);
  process.chdir(this[0]);
  fs.rmdirSync(".git", {
    recursive: true,
    force: true
  });

  console.log("Initialized", this[0]);
}
