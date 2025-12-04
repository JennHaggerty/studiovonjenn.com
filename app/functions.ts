import { Dispatch, SetStateAction } from "react";

const jsonHeaders = {
  "Content-Type": "application/json",
};

export const getAllFiles = async (arg: { slug: string }) => {
  const { slug } = arg;
  const body = JSON.stringify(slug);

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

export const getFiles = async (arg: { slug: string }) => {
  const { slug } = arg;
  const body = JSON.stringify(slug);

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

export const getDirectories = async (arg: { slug: string }) => {
  const { slug } = arg;
  const body = JSON.stringify(slug);

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
  slug: string;
  setState: Dispatch<SetStateAction<[] | undefined>>;
}) => {
  const { slug, setState } = args;
  const files = await getFiles({ slug }).then((data) => {
    return data;
  });
  setState(files);
};
