const uuid = require('uuid');
// uuidv4();
const path = require('path');

class FileService {
   saveFile(file) {
      try {
         const fileName = uuid.v4() + '.jpg';
         const filePath = path.join(__dirname, fileName);
         file.mv(filePath);
         return fileName;
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = new FileService();
