/**
 * @file contains unit tests for PersonService Class.
 */
import EventPublisher from "../../../src/helpers/EventPublisher"
import Repository from "../../../src/repositories"
import PersonService from "../../../src/services/PersonService"
import PersonServiceHelper from "./PersonService.helper"

 let input: any
 let output: any
 let mock: any
 let personService: PersonService
 
 describe("PersonService.create", () => {
   beforeAll(() => {
     input = PersonServiceHelper.input.create
     mock = PersonServiceHelper.mock.create
   })
 
   beforeEach(() => {
     personService = new PersonService()
     Repository.prototype.create = mock.repository.create
     EventPublisher.prototype.publishPersonCreation = mock.eventPublisher.publishPersonCreation
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("can be called", async () => {
     expect(await personService.create(input.data))
   })
 
   it("returns something", async () => {
     expect(await personService.create(input.data)).toBeUndefined()
   })
 
   it("calls internal functions correctly when valid input is passed", async () => {
     await personService.create(input.data)
     expect(Repository.prototype.create).toHaveBeenCalledTimes(1)
     expect(EventPublisher.prototype.publishPersonCreation).toHaveBeenCalledTimes(1)
   })
 })
 
 describe("PersonService.list", () => {
  beforeAll(() => {
    output = PersonServiceHelper.output.list
    mock = PersonServiceHelper.mock.list
  })

  beforeEach(() => {
    personService = new PersonService()
    Repository.prototype.read = mock.repository.read
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("can be called", async () => {
    expect(await personService.list())
  })

  it("returns something", async () => {
    expect(await personService.list()).toBeDefined()
  })

  it("returns valid output", async () => {
    expect(await personService.list()).toEqual(output)
  })

  it("calls internal functions correctly when valid input is passed", async () => {
    await personService.list()
    expect(Repository.prototype.read).toHaveBeenCalledTimes(1)
  })
})