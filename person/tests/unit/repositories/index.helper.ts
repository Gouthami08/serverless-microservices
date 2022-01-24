/**
 * @file is a helper class for Repository class unit tests.
 */
const person = {
  firstName: "abc",
  lastName: "xyz",
  phoneNumber: "12345678",
  address: "default address"
}
const result = {
  Items: [
    person
  ]
}

export default {
  input: {
    create: {
      data: {
        url: "url",
        message: "message"
      }
    },
    read: {
      data: {
        table: "table"
      }
    }
  },
  output: {
    read: [person]
  },
  mock: {
    create: {
      dynamoDB: {
        documentClient: {
          put: jest.fn(() => ({
            promise: jest.fn()
          }))
        }
      },
      env: {
        region: "region"
      }
    },
    read: {
      dynamoDB: {
        documentClient: {
          scan: jest.fn(() => ({
            promise: jest.fn(() => result)
          }))
        }
      },
      env: {
        PERSONS_DYNAMODB_TABLE_NAME: "tableName",
        region: "region"
      }
    }
  }
}