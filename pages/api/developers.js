// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'developer-assignments.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load developer assignments', message: error.message });
  }
}
