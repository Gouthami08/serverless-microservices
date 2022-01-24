/**
 * @file contains jest unit test configuration
 */
const path = require("path")

module.exports = {
  rootDir: path.resolve(__dirname, "./"),
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest"
  },
  verbose: true,
  testRegex: "tests/unit/.*\\.test.*"
}