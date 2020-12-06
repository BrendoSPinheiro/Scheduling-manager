import fs from 'fs';
import path from 'path';
import ScheduleRule from '../app/models/ScheduleRule';

class Connection {
  private database = path.resolve(__dirname, 'database.json');

  public readFile() {
    const content = fs.readFileSync(this.database, 'utf-8');
    return JSON.parse(content);
  }

  public writeFile(content: ScheduleRule) {
    const stringfyContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(this.database, stringfyContent, 'utf-8');
  }
}

export default new Connection();
