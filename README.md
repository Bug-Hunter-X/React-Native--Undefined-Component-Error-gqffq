# React Native Undefined Component Error

This repository demonstrates a common error in React Native applications: rendering a component before it's defined. The error occurs when a component is used before it has been properly imported or defined within the component tree.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version. 

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` (depending on your platform).
4. Observe the error message in the console.

## Solution
The solution involves ensuring the component is properly imported and defined before being used in the component tree.  The `bugSolution.js` file demonstrates the correct implementation. 

This example highlights the importance of carefully managing component imports and definitions in React Native applications to prevent such runtime errors.