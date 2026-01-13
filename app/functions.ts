import { Dispatch, SetStateAction } from "react";
import { galleries } from "./site";

interface Gallery {
  slug: string;
  directory: string;
  title?: string;
  description?: string;
}

const jsonHeaders = {
  "Content-Type": "application/json",
};

export const deleteFolder = async (arg: { fullPath: string }) => {
  const { fullPath } = arg;
  const body = JSON.stringify(fullPath);

  return await fetch("./api/files/deleteDirectory", {
    method: "DELETE",
    headers: jsonHeaders,
    body,
  })
    .then((res) => {
      if (res.status !== 201) {
        return console.log("Could not delete directory.");
      }

      return res;
    })
    .catch((e) => console.log(e));
};

export const deleteFile = async (arg: { fullImagePath: string }) => {
  const { fullImagePath } = arg;
  const body = JSON.stringify(fullImagePath);

  return await fetch("./api/files/delete", {
    method: "DELETE",
    headers: jsonHeaders,
    body,
  })
    .then((res) => {
      if (res.status !== 201) {
        return console.log("There was an error deleting the image.");
      }

      return res;
    })
    .catch((e) => console.log(e));
};

export const getAllFiles = async (arg: { directory: string }) => {
  const { directory } = arg;
  const body = JSON.stringify(directory);

  return await fetch("./api/files/get", {
    method: "POST",
    headers: jsonHeaders,
    body,
  })
    .then(async (res) => {
      if (res.status !== 201) {
        return console.log("There was an error getting images.");
      }

      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

export const getFiles = async (arg: { directory: string }) => {
  const { directory } = arg;
  const body = JSON.stringify(directory);

  return await fetch("./api/files/getFiles", {
    method: "POST",
    headers: jsonHeaders,
    body,
  })
    .then(async (res) => {
      if (res.status !== 201) {
        return console.log("There was an error getting images.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

export const getDirectories = async (arg: { directory: string }) => {
  const { directory } = arg;
  const body = JSON.stringify(directory);

  return await fetch("./api/files/getFolders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then(async (res) => {
      if (res.status !== 201) {
        return console.log("There was an error getting directories.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

export const customStringSort = (a: string, b: string) => {
  return Number(a.match(/(\d+)/g)![0]) - Number(b.match(/(\d+)/g)![0]);
};

export const scrollToTop = (delay?: number) => {
  const safeDelay = delay ? delay : 300;

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, safeDelay);
};

export const setFiles = async (args: {
  directory: string;
  setState: Dispatch<SetStateAction<[] | undefined>>;
}) => {
  const { directory, setState } = args;
  const files = await getFiles({ directory }).then((data) => {
    return data;
  });
  setState(files);
};

export const getGallery = async (
  slug: string,
): Promise<Gallery | undefined> => {
  const gallery = galleries.find((item) => item.slug === slug);

  return gallery;
};
