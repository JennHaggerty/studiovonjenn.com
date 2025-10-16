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
