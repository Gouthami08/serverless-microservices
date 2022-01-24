/**
 * @file is a helper class for Queue class unit tests.
 */
export default {
  input: {
    sendMessage: {
      data: {
        url: "url",
        message: "message"
      }
    }
  },
  mock: {
    sendMessage: {
      sqs: {
        sendMessage: jest.fn(() => ({
          promise: jest.fn()
        }))
      }
    },
    env: {
      region: "region"
    }
  }
}