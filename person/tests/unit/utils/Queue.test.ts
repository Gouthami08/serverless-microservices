/**
 * @file contains unit tests for Queue Class.
 */
import { SQS } from "aws-sdk"
import Queue from "../../../src/utils/Queue"
import QueueHelper from "./Queue.helper"

  let input: any
  let mock: any
  let queue: Queue
  const ENV = process.env
 
 describe("Queue.sendMessage", () => {
   beforeAll(() => {
     input = QueueHelper.input.sendMessage
     mock = QueueHelper.mock.sendMessage
   })
 
   beforeEach(() => {
    SQS.prototype.sendMessage = mock.sqs.sendMessage
     queue = new Queue()
     process.env = mock.env
   })
 
   afterEach(() => {
    process.env = ENV
     jest.clearAllMocks()
   })
 
   it("can be called", async () => {
     expect(await queue.sendMessage(input.data.url , input.data.message))
   })
 
   it("calls internal functions correctly", async () => {
    await queue.sendMessage(input.data.url , input.data.message)
     expect(SQS.prototype.sendMessage).toHaveBeenCalledTimes(1)
   })
 })