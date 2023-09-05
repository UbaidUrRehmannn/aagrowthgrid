import * as fs from 'fs';
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

//   import * as fs from 'fs';
//   import path from 'path';
  
//   export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       try {
//         const requestBody = req.body;
  
//         // Check if the request body is empty or not valid JSON
//         if (!requestBody || typeof requestBody !== 'object') {
//           return res.status(400).json({ message: 'Invalid request body' });
//         }
  
//         // Define the path to the JSON file
//         const filePath = path.join(process.cwd(), 'src/data/contactformdata/contactentries.json');
  
//         // Read existing data from the file (starts as an empty array if file is empty)
//         const existingData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
  
//         // Append the new entry to the array
//         existingData.push(requestBody);
  
//         // Write the updated array back to the file
//         await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
  
//         return res.status(200).json({ message: 'Data appended successfully' });
//       } catch (error) {
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//       }
//     } else {
//       return res.status(200).json({ message: 'Invalid request method' });
//     }
//   }