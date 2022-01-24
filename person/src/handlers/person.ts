import { Handler } from "aws-lambda"
import PersonService from "../services/PersonService"
import ResponseUtils from "../utils/ResponseUtils"

/**
 * @method is the handler for creating a person
 * @param event contains details of event that triggered this function
 * @returns response
 */
export const create: Handler = async (
  event: any
) => {
  let result
  try {
    result = await new PersonService().create(JSON.parse(event.body))
  } catch (error) {
    result = error
  }
  return ResponseUtils.constructResponse(result)
}

/**
 * @method is the handler for listing existing persons
 * @returns response
 */
export const list: Handler = async (
) => {
  let result
  try {
    result = await new PersonService().list()
  } catch (error) {
    result = error
  }
  return ResponseUtils.constructResponse(result)
}