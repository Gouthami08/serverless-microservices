/**
 * @file contains util methods related to response formatting.
 */
import { HTTP_STATUS_CODES } from "../constants"

export default class ResponseUtils {

  /**
   * @method will format the response before returning to the api gateway
   * @param result contains response data 
   * @returns formatted response
   */
  public static constructResponse(result: any): any {
    let statusCode = HTTP_STATUS_CODES.OK
    let body: string

    if (result instanceof Error) {
      statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
      body = JSON.stringify({
        message: "Something went wrong, Please try again later",
        error: result
      })
    } else if (!result) {
      statusCode = HTTP_STATUS_CODES.OK_NO_CONTENT
    } else {
      body = JSON.stringify(result)
    }

    return {
      statusCode,
      body
    }
  }
}