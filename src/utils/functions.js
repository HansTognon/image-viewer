import * as fs from 'fs'
import * as path from 'path'
export function getImageFiles(file) {
  let files = fs.readdirSync(path.dirname(file))
  let reg_ext = /^\.(png|jpg|jpeg)$/i
  // Select the right files
  files = files
    .filter((elt) => elt !== file && reg_ext
      .test(path.extname(elt)))
    .map((elt) => path.join(path.dirname(file), elt))
    files.splice(files.indexOf(file), 1);
    files.splice(0, 0, file);
  return files
}
