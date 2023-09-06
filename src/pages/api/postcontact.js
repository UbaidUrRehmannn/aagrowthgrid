import * as fs from 'fs';
// import {} from "/"
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // res.status(200).json(["Yes Post Done"])
        let data = await fs.promises.readdir('src/data/contactformdata');
        console.log("data: ", data)
        fs.promises.writeFile('src/data/contactformdata/1.json', JSON.stringify(req.body), () => {});
        res.status(200).json(req);
        console.log("req.body: ", req.body);
    } else {
      res.status(200).json(["allBlogs"])
    }
  }