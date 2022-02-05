/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const path = require('path');

module.exports = {
  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/private/var/folders/_t/rxp8v70x2_lbqd6nqg981vph0000gn/T/jest_dx",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
  ],
  // The root directory that Jest should scan for tests and modules within
  rootDir: path.resolve(__dirname),

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>"
  ],


  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",


  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    '!**/__demo__/**',
    '!**/__mocks__/**',
    '!**/mock/**',
    '!/services/**',
  ],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ]
};
