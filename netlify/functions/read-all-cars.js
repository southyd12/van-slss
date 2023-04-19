import dbConnect from "../../api/db";
import Car from "../../api/models/car.model";
import middleware from "./../../api/middleware/index";

import { standardAPIHeaders as headers } from "./../../api/utils/index";

export const handler = async (event, context) => {
  if (event.httpMethod.toUpperCase() !== "GET") {
    return {
      statusCode: 404,
      body: "Wrong Method",
    };
  }
  middleware.use(event);
  try {
    await dbConnect();
    const cars = await Car.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(cars),
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
