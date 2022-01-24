/**
 * @file is a helper class for ResponseUtils class unit tests.
 */
 export default {
  input: {
    constructResponse: {
      data: {
        valid: {
          result: "result"
        },
        noResponse: undefined,
        errorResponse: new Error("error")
      }
    }
  },
  output: {
    constructResponse: {
      valid: {
        statusCode: 200,
        body: JSON.stringify({
          result: "result"
        })
      },
      noResponse: {
        statusCode: 204
      },
      errorResponse: {
        statusCode: 500,
        body: JSON.stringify({
          message: "Something went wrong, Please try again later",
          error: new Error("error")
        })
      }
    }
  }
}