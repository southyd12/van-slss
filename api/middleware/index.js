import parseJSON from "./parse-json";

export default {
  wares: [parseJSON],
  use(event) {
    for (const fn of this.wares) {
      fn(event);
    }
  },
};
