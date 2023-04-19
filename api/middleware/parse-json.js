// const parseJSON = (event) => JSON.parse(event.body);
export default (event /*, context */) => {
  if (!event.body) return;
  event.body = JSON.parse(event.body);
};
