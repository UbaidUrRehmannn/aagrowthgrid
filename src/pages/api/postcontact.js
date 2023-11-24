import * as fs from 'fs';
const filePath =  "src/data/contactformdata/contactformentries.json";
// const filePath =  "../../data/contactformdata/contactformentries.json";

const now = new Date();
const formattedDate = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});
const formattedTime = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

const formattedTimestamp = `${formattedDate} ${formattedTime}`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
      // let data = await fs.promises.readdir('src/data/contactformdata');
      // console.log("data: ", data);
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      const newRecord = {
        id: data.length + 1,
        timestamp: formattedTimestamp,
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