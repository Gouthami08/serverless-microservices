/**
 * @file contains unit tests for Repository Class.
 */
 import { DynamoDB } from "aws-sdk"
import Repository from "../../../src/repositories"
 import helper from "./index.helper"
 
   let input: any
   let mock: any
   let output: any
   let repository: Repository
   const ENV = process.env
  
  describe("Repository.create", () => {
    beforeAll(() => {
      input = helper.input.create
      mock = helper.mock.create
    })
  
    beforeEach(() => {
     DynamoDB.DocumentClient.prototype.put = mock.dynamoDB.documentClient.put
     repository = new Repository()
     process.env = mock.env
    })
  
    afterEach(() => {
     process.env = ENV
      jest.clearAllMocks()
    })
  
    it("can be called", async () => {
      expect(await repository.create(input.data.table , input.data.items))
    })
  
    it("calls internal functions correctly", async () => {
      await repository.create(input.data.table , input.data.items)
      expect(DynamoDB.DocumentClient.prototype.put).toHaveBeenCalledTimes(1)
    })
  })

  describe("Repository.read", () => {
    beforeAll(() => {
      input = helper.input.read
      output = helper.output.read
      mock = helper.mock.read
    })
  
    beforeEach(() => {
     DynamoDB.DocumentClient.prototype.scan = mock.dynamoDB.documentClient.scan
     repository = new Repository()
     process.env = mock.env
    })
  
    afterEach(() => {
     process.env = ENV
      jest.clearAllMocks()
    })
  
    it("can be called", async () => {
      expect(await repository.read(input.data.table))
    })

    it("returns output", async () => {
      expect(await repository.read(input.data.table)).toEqual(output)
    })
  
    it("calls internal functions correctly", async () => {
      await repository.read(input.data.table)
      expect(DynamoDB.DocumentClient.prototype.scan).toHaveBeenCalledTimes(1)
    })
  })