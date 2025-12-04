import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = path.join(process.cwd(), "public", req.body);
    const dirents = await fs.readdir(slug, { withFileTypes: true });
    const files = dirents
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name);

    return res.status(201).json(files);
  } catch (e) {
    console.log(e);
  }
};
