/**
 * @file is a helper for PersonService class unit tests.
 */
const person = {
  firstName: "abc",
  lastName: "xyz",
  phoneNumber: "12345678",
  address: "default address"
}

export default {
  input: {
    create: {
      data: {
        firstName: "abc",
        lastName: "xyz",
        phoneNumber: "12345678",
        address: "default address"
      }
    }
  },
  output: {
    list: [person]
  },
  mock: {
    create: {
      repository: {
        create: jest.fn()
      },
      eventPublisher: {
        publishPersonCreation: jest.fn()
      }
    },
    list: {
      repository: {
        read: jest.fn(() => [person])
      }
    }
  }
}