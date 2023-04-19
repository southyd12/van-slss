import dbConnect from "../../api/db";
import Car from "../../api/models/car.model";
import middleware from "./../../api/middleware/index";

import {
  standardAPIHeaders as headers,
  getIDFromURL,
} from "./../../api/utils/index";

export const handler = async (event, context) => {
  if (event.httpMethod.toUpperCase() !== "GET") {
    return {
      statusCode: 404,
      body: "Wrong Method",
    };
  }
  middleware.use(event);
  const id = getIDFromURL(event.path);

  try {
    await dbConnect();
    const car = await Car.findById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(car),
      headers,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers,
    };
  }
};
