# Calculator Testing

This project is a simple calculator web application developed with React. The primary focus of this project is to showcase best practices for testing and linting React applications.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Error handling for negative numbers and exceeding the maximum limit.
- Responsive design for various screen sizes.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast, modern build tooling for React applications.
- ESLint: A pluggable linting utility for JavaScript and JSX.
- Jest: A delightful JavaScript Testing Framework with a focus on simplicity.
- Vitest: A testing framework for Vite-powered React applications.
- Storybook: An open-source tool for developing UI components in isolation for React.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Start writing tests and developing new features!

## Tests Implemented

The following tests have been implemented:

- Render initial display value
- Perform addition correctly
- Ensure only 9 numbers can be entered
- Clear the display on clear button click
- Delete last character on backspace button click
- Verify negative numbers handling
- Verify handling of numbers greater than 999999999
- Verify division with a limit of 9 characters

## Code Coverage

Code coverage is measured using `nyc`, which integrates with Jest to provide coverage reports. After running the tests, you can view the coverage report to see how much of your code is being tested.

To generate and view the coverage report, run the following command:

```
npm run coverage
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code style and formatting issues.
- `npm run test`: Run Jest to execute the tests.
- `npm run coverage`: Generate code coverage report.
- `npm run storybook`: Run Storybook to develop and showcase UI components.
- `npm run build-storybook`: Build Storybook for deployment.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
