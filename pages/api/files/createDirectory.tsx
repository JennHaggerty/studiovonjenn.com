import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = req.body;
    const name = body.newFolder;
    const sanitized = name.split(" ").join("_");
    const directory = body.directory;
    const fullPath = directory + sanitized;
    const newDirectory = path.join(process.cwd(), "public", fullPath);

    await fs
      .mkdir(newDirectory, { recursive: true })
      .catch((e) => console.log(e));

    return res.status(201).json("Directory created.");
  } catch (e) {
    console.log(e);
  }
};
