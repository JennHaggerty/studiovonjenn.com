import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { File } from "formidable";
import { promises as fs } from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);
    const uploadedFiles: File[] = await new Promise((res, rej) => {
      const form = new IncomingForm();
      form.parse(req, (error: any, fields: any, files: any) => {
        if (error) return rej(error);
        console.log(fields);
        res(files.newFiles);
      });
    });

    if (!uploadedFiles)
      return res.status(500).json("Could not process incoming files.");

    uploadedFiles.forEach(async (newFile) => {
      const oldPath = newFile.filepath;
      const newPath = path.join(
        process.cwd(),
        "public",
        newFile.originalFilename ||
          "a-new-file-has-appeared" + newFile.mimetype,
      );

      fs.rename(oldPath, newPath).catch((e) => console.log(e));
    });
    return res.status(201);
    // const newFilePath = path.join(process.cwd(), "public", fullPath);
  } catch (e) {
    console.log(e);
  }
};
