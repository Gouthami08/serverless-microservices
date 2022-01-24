/**
 * @file contains unit tests for ResponseUtils Class.
 */
 import ResponseUtils from "../../../src/utils/ResponseUtils"
 import ResponseUtilsHelper from "./ResponseUtils.helper"
 
   let input: any
   let output: any
  
  describe("ResponseUtils.constructResponse", () => {
    beforeAll(() => {
      input = ResponseUtilsHelper.input.constructResponse
      output = ResponseUtilsHelper.output.constructResponse
    })
  
    afterEach(() => {
      jest.clearAllMocks()
    })
  
    it("can be called", async () => {
      expect(await ResponseUtils.constructResponse(input.data.valid))
    })

    it("returns correct output for input with response body", async () => {
      expect(await ResponseUtils.constructResponse(input.data.valid)).toEqual(output.valid)
    })

    it("returns correct output for input with no response body", async () => {
      expect(await ResponseUtils.constructResponse(input.data.noResponse)).toEqual(output.noResponse)
    })

    it("returns correct output for input having error", async () => {
      expect(await ResponseUtils.constructResponse(input.data.errorResponse)).toEqual(output.errorResponse)
    })
  })