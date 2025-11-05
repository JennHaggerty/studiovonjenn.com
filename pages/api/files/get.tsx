import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

interface Item {
  name: string;
  extension?: string;
  isDirectory?: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const directory = path.join(process.cwd(), "public", req.body);
    const dirents = await fs.readdir(directory, { withFileTypes: true });
    let files: Item[] = [];
    dirents.map((item) => {
      let newItem: Item = { name: "" };
      newItem.name = item.name;
      if (item.isFile()) newItem.extension = item.name.split(".").pop();
      if (item.isDirectory()) newItem.isDirectory = true;

      files.push(newItem);
      return;
    });

    return res.status(201).json(files);
  } catch (e) {
    console.log(e);
  }
};
