/**
 * @file contains unit tests for EventPublisher Class.
 */

import EventPublisher from "../../../src/helpers/EventPublisher"
import Queue from "../../../src/utils/Queue"
import EventPublisherHelper from "./EventPublisher.helper"

 let input: any
 let mock: any
 let eventPublisher: EventPublisher

describe("EventPublisher.publishPersonCreation", () => {
  beforeAll(() => {
    input = EventPublisherHelper.input.publishPersonCreation
    mock = EventPublisherHelper.mock.publishPersonCreation
  })

  beforeEach(() => {
    eventPublisher = new EventPublisher()
    Queue.prototype.sendMessage = mock.queue.sendMessage
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("can be called", async () => {
    expect(await eventPublisher.publishPersonCreation(input.data))
  })

  it("returns something", async () => {
    expect(await eventPublisher.publishPersonCreation(input.data)).toBeUndefined()
  })

  it("calls internal functions correctly when valid input is passed", async () => {
    await eventPublisher.publishPersonCreation(input.data)
    expect(Queue.prototype.sendMessage).toHaveBeenCalledTimes(1)
  })
})