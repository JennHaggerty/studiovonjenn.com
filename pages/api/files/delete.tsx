import { NextApiRequest, NextApiResponse } from "next";
import { unlink } from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file = "public" + req.body;
    unlink(file, (err) => {
      if (err) throw err;
    });

    return res.status(201).json("File deleted.");
  } catch (e) {
    console.log(e);
  }
};
