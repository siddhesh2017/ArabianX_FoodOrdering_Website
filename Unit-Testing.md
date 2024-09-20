***Unit Testing Steps***
Step 1: Install Testing Library for react => npm install --save-dev @testing-library/react
Step 2: Install Jest (because testing library uses jest) => npm install -D jest
Step 3: Configure jest => npx jest --init
Step 4: Install jest-environment-jsdom => npm install -D jest-environment-jsdom
Step 5: Create __test__ folder and files with "name.test.js" in it
Step 6: write first test in the "sum.test.js" file 
Step 7: When we try to import sum.js file into sum.test.js it gives error because jest dosent understand this import 
        Therefore we need to Configure Babel => npm install --save-dev babel-jest @babel/core @babel/preset-env (write configuration in .babelrc file)
Step 8: npm run test (DONE)

!!Note: Make your test case descriptive

**Test 2: Testing whether the the logo inside the header loads of not**
1. Create Header.test.js file and import Header
2. import render function from "@testing-library/react"
3. Load Header 
4. jest dosent understand the jsx so we need to configure babel => npm i -D @babel/preset-react and Add configuration in .babelrc file
5. Now it does not understand images of png so we create a dummu image in src/mocks with .js extension and then use moduleNameMapper to map all .png files to dummyImg.js file =>
 moduleNameMapper: {
    "\\.(png | jpg)$":"./src/mocks/dummyImg.js"
  },

6. Then we have used redux store so we need to provide the header store 
7. Then we have used routes, Link tags in header so we need to import StaticRouter from react-router-dom/server
8. done 