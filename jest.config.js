module.exports = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss|png)$': '<rootDir>/src/empty.js',
  },
  collectCoverageFrom: [
    'src/components/*.{ts,tsx}',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
},
moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
rootDir: '.',
testEnvironment: 'jsdom',
testRegex: '(test|spec).tsx?$',
transform: {
  '.*': ['<rootDir>/fileTransformer.js', 'ts-jest'],
},
};
