import fs from 'fs';
import path from 'path';

const database = path.resolve(__dirname, 'database.json');

class Connection {
  readFile() {
    const content = fs.readFileSync(database, 'utf-8');

    return JSON.parse(content);
  }

  writeFile(content: object) {
    const stringfyContent = JSON.stringify(content);
    fs.writeFileSync(database, stringfyContent, 'utf-8');

    return JSON.parse(stringfyContent);
  }
}

export default new Connection();
