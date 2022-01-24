/**
 * @file is a helper for EventPublisher class unit tests.
 */
export default {
  input: {
    publishPersonCreation: {
      data: {
        firstName: "abc",
        lastName: "xyz",
        phoneNumber: "12345678",
        address: "default address"
      }
    }
  },
  mock: {
    publishPersonCreation: {
      queue: {
        sendMessage: jest.fn()
      }
    }
  }
}