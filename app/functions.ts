export const getFilenames = async (arg: { directory: string }) => {
  const { directory } = arg;

  return await fetch("./api/files/getNames", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(directory),
  })
    .then(async (res) => {
      if (res.status !== 201) {
        return console.log("There was an error getting images.");
      }

      return res;
    })
    .catch((e) => {
      return e;
    });
};
export const customSort = (a: string, b: string) => {
  return Number(a.match(/(\d+)/g)![0]) - Number(b.match(/(\d+)/g)![0]);
};

export const scrollToTop = (delay?: number) => {
  const safeDelay = delay ? delay : 300;

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, safeDelay);
};
