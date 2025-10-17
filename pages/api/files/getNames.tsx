import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { customSort } from "@/app/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const directory = path.join(process.cwd(), "public", req.body);
    console.log(directory);
    const filenames = await fs.readdir(directory);
    const sortedFilenames = filenames.sort(customSort);

    return res.status(201).json(sortedFilenames);
  } catch (e) {
    console.log(e);
  }
};
