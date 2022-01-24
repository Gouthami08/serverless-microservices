/**
 * @file contains service class for person
 */
import { EVENT_NAMES } from "../constants"
import EventPublisher from "../helpers/EventPublisher"
import Repository from "../repositories"

export default class PersonService {

  /**
   * @method creates a new person in dynamo db and also triggers person creation event
   * @param data contains person information
   */
  public async create(data: any): Promise<any> {
    await new Repository().create(process.env.PERSONS_DYNAMODB_TABLE_NAME, data)
    await new EventPublisher().publishPersonCreation({
      event: EVENT_NAMES.PERSON_CREATED,
      data
    })
  }

  /**
   * @method lists all the existing persons
   * @returns persons details
   */
  public async list(): Promise<any> {
    return await new Repository().read(process.env.PERSONS_DYNAMODB_TABLE_NAME)
  }
}