export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // The root directory that Jest should scan for tests and modules within
  rootDir: "./src",

  testEnvironment: "node",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
