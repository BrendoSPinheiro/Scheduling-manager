import fs from 'fs';
import path from 'path';

class Connection {
  database = path.resolve(__dirname, 'database.json');

  readFile() {
    const content = fs.readFileSync(this.database, 'utf-8');
    return JSON.parse(content);
  }

  writeFile(content: object) {
    const stringfyContent = JSON.stringify(content);
    fs.writeFileSync(this.database, stringfyContent, 'utf-8');
  }
}

export default new Connection();
