/**
 * @file contains util methods for queue related services.
 */
import { SQS } from "aws-sdk"
import { v4 as uuidv4 } from "uuid"
import { DEFAULT_CONFIGURATION } from "../constants"

export default class Queue {
  private sqs: SQS = new SQS(DEFAULT_CONFIGURATION)

  /**
   * @method will send the message into the queue
   * @param url specifies the queue url to which a message to be pushed
   * @param message contains the information to be pushed
   * @returns 
   */
  public async sendMessage(url: string, message: string): Promise<any> {
    return await this.sqs.sendMessage({
        QueueUrl              : url,
        MessageGroupId        : uuidv4(),
        MessageDeduplicationId: uuidv4(),
        MessageBody           : message
      }).promise()
  }
}