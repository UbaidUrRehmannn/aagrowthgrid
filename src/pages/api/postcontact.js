import * as fs from 'fs';
const filePath =  "src/data/contactformdata/contactformentries.json";
export default async function handler(req, res) {
  if (req.method === 'POST') {
      // let data = await fs.promises.readdir('src/data/contactformdata');
      // console.log("data: ", data);
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      const newRecord = {
        id: data.length + 1,
        ...req.body
      };
      data.push(newRecord);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(200).json("Data Submited Successfully");
  } else if (req.method === 'GET') {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.status(200).json(data);
  }
}