import * as fs from 'fs'
import * as path from 'path'
export function getImageFiles(file) {
  console.log('file', file)
  let files = fs.readdirSync(path.dirname(file))
  console.log('All files', files)
  // Select the right files
  files = files
    .filter((elt) => elt !== file && /^\.(png|jpg|jpeg)$/
      .test(path.extname(elt)))
    .map((elt) => path.join(path.dirname(file), elt))
    files.splice(files.indexOf(file), 1);
    files.splice(0, 0, file);
  console.log('After Treatment', files)
  return files
}
