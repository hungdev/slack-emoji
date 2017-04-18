const fs = require('fs');

const BLOCKED_FILENAMES = ['.DS_Store'];
const FOLDER = 'emojis/';


function notBlocked(filename){
  return !BLOCKED_FILENAMES.includes(filename);
}

console.log('Copy the text below to readme:\n\n---');

fs.readdir(FOLDER, (err, categories) => {
  categories.sort().forEach(category => {
    fs.readdir(`${FOLDER}${category}`, (err, files) => {
      if (!files) {
        return;
      }
      console.log(`\n## ${category}\n`);
      files.filter(notBlocked).sort().forEach(file => {
        console.log(`![${file}](${FOLDER + category}/${file})`);
      });
    });
  });
});
