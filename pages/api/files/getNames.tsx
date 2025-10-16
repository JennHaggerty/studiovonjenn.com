import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const directory = path.join(process.cwd(), "public", req.body);
    console.log(directory);
    const fileNames = await fs.readdir(directory);

    return res.status(201).json(fileNames);
  } catch (e) {
    console.log(e);
  }
};
