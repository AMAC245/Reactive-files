const fs = require('fs');

function isModularFormat(folder, sub) {
  fs.lstat(__dirname + folder + sub, (err, type) => {
    if(err) console.error(err)

    return type.isDirectory()
  })
};

function watchResources(folder) {
  fs.readdir(__dirname + folder, 'utf8', (err, src) => {
    if(err) console.error(err)

    const watchers = [];
    src.map(file => watchers.push(file));

    return watchers
  })
};