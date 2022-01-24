/**
 * @file contains constants used in the application. 
 */
export const DEFAULT_CONFIGURATION = { region: process.env.REGION }
export const PERSONS_EVENT_QUEUE_URL = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNT_ID}/${process.env.PERSONS_EVENT_QUEUE}`
export const EVENT_NAMES = {
  PERSON_CREATED: "person-created"
}
export const HTTP_STATUS_CODES = {
  OK: 200,
  OK_NO_CONTENT: 204,
  INTERNAL_SERVER_ERROR: 500
}

export default {
  PERSONS_EVENT_QUEUE_URL,
  DEFAULT_CONFIGURATION,
  EVENT_NAMES,
  HTTP_STATUS_CODES
}