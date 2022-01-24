/**
 * @file contains class for publishing events
 */
import { PERSONS_EVENT_QUEUE_URL } from "../constants"
import Queue from "../utils/Queue"

export default class EventPublisher {

  /**
   * @method helper function to publish an event for person creation
   * @param data contains person creation event information 
   */
  public async publishPersonCreation(data: any): Promise<any> {
    await new Queue().sendMessage(PERSONS_EVENT_QUEUE_URL, JSON.stringify(data))
  }
}