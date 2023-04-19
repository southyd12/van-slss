const getIDFromURL = (url = "") => url.split("/").at(-1);

const standardAPIHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

export { getIDFromURL, standardAPIHeaders };
