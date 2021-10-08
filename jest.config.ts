export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // The root directory that Jest should scan for tests and modules within
  rootDir: ".",

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/__tests__"],

  testEnvironment: "node",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
