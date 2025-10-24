import { Dispatch, SetStateAction } from "react";

const jsonHeaders = {
  "Content-Type": "application/json",
};

export const deleteFile = async (arg: { fullImagePath: string }) => {
  const { fullImagePath } = arg;
  const body = JSON.stringify(fullImagePath);

  return await fetch("./api/files/delete", {
    method: "DELETE",
    headers: jsonHeaders,
    body,
  })
    .then(async (res) => {
      if (res.status !== 201) {
        return console.log("There was an error deleting the image.");
      }

      return res;
    })
    .catch();
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
