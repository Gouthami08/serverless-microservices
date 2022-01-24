/**
 * @file contains class for DB related operations.
 */
import { DynamoDB } from "aws-sdk"
import { DEFAULT_CONFIGURATION } from "../constants"

export default class Repository {

  private documentClient = new DynamoDB.DocumentClient(DEFAULT_CONFIGURATION)

  /**
   * @method helps to create a new item in dynamo db table
   * @param table specifies the table name in which the data will be stored
   * @param items contains information to be stored
   * @returns 
   */
  public async create(table: string, items: any): Promise<any> {
    return await this.documentClient.put({
      TableName: table,
      Item: items
    }).promise()
  }

  /**
   * @method helps to fetch all the existing items in a table
   * @param table specifies the table name which is being queried
   * @returns all items
   */
  public async read(table: string): Promise<any> {
    const result = await this.documentClient.scan({
      TableName: table
    }).promise()
    return result.Items
  }
}