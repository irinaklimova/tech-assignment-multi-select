## Getting Started

Run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Jest tests

```
npm run test
```

## Run Cypress tests

```
npm run cypress:open
```

## Architecture and design decisions

* I used NextJS framework to build React application and to provide API endpoint.
* Every component/page has their css module for scoping related styles.
* The code might be reusable I moved to separate components: SearchInput and CheckboxInput.
* Critical functionality of components and utils is covered with Jest Unit tests.
* Cypress tests were written for main user scenario.