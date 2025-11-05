import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = req.body;
    const directory = path.join(process.cwd(), "public", body);
    await fs.rm(directory, { recursive: true, force: true });

    return res.status(201).json("Directory deleted.");
  } catch (e) {
    console.log(e);
  }
};
