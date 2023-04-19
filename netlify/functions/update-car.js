import dbConnect from "../../api/db";
import Car from "../../api/models/car.model";
import middleware from "./../../api/middleware/index";

import {
  standardAPIHeaders as headers,
  getIDFromURL,
} from "./../../api/utils/index";

export const handler = async (event, context) => {
  if (event.httpMethod.toUpperCase() !== "PUT") {
    return {
      statusCode: 404,
      body: "Wrong Method",
    };
  }
  middleware.use(event);
  const id = getIDFromURL(event.path);
  // const updates = JSON.parse(event.body);
  const updates = event.body;
  console.log("updates", updates);
  try {
    await dbConnect();
    const result = await Car.updateOne({ _id: id }, updates);
    if (result.n === 0) return {
      statusCode: 404,
    }
    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers,
    };
  }
};
