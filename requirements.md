# Frontend Developer Assessment: Multi-Select Filter

## Overview
In this task, you are required to create a web application that implements a multi-select filter. The goal is to demonstrate your ability to structure a web app, handle technical challenges, and showcase your skills in modern frontend development.

## Task Breakdown:
1. Clone the repository and set up the web application.
2. Implement a multi-select filter that allows users to search, filter, and select multiple items.

### The selected items should:
- Be displayed on top of the list, separated from the search results.
- Persist across page reloads (Bonus feature).

3. Use best practices in frontend development, following modern JavaScript/TypeScript, HTTP/REST, and UI/UX standards.

## Provided Assets:
- **JSON data file**: Contains 470 items for the multi-select filter.
- **UI design for multi-select**: A visual reference for how the filter should look.
- **Search Icon**: An SVG icon for the search feature.

## Functional Requirements:
### Display the Multi-Select Filter:
- Fetch the JSON data via HTTP (e.g., using Fetch API or Axios).
- Render the data items dynamically in a dropdown or list.

### Search and Filter Functionality:
- Implement a search bar that filters the displayed data in real-time as the user types.
- The filter should be case-insensitive.

### Multi-Selection Functionality:
- Allow users to select multiple items from the list.
- The selected items should be highlighted and displayed at the top of the list, separate from the filtered results.

### Persistence of Selected Items (Bonus):
- Store the selected items locally using `localStorage` or `sessionStorage`.
- The selected items should persist after a page reload.

## Primary Criteria:
- **Clean and Structured Code**: HTML, CSS, JavaScript should be modular, maintainable, and adhere to modern best practices.
- **Frontend Architecture**: Preferably use a component-based architecture (e.g., React, Vue, or Angular), but a vanilla JavaScript solution is acceptable if well-structured.
- **HTTP/REST**: Interact with the provided JSON file using HTTP.
- **ES6 or TypeScript**: Use ES6+ JavaScript or TypeScript.

## Secondary Criteria (Bonus):
- **Advanced CSS**: Utilize modern CSS techniques such as Flexbox, Grid, or CSS custom properties (CSS Variables).
- **CSS Preprocessing**: Bonus if you use a preprocessor like Sass or Less.
- **Responsive Design**: Ensure the multi-select filter works well on both desktop and mobile devices.
- **State Management**: For frameworks like React, Vue, or Angular, use appropriate state management (e.g., Context API, Redux, Vuex).
- **Build Setup**: Set up a modern build pipeline with tools like Webpack, Vite, or Parcel. Alternatively, if using a framework (React, Angular, Vue), use its recommended build tools.

## Additional Considerations:
- **Code Quality**: We are looking for well-structured, readable, and maintainable code. Use meaningful variable names, break down the app into reusable components, and avoid duplicated logic.
- **Testing**: While not required, it's a plus if you demonstrate TDD or BDD using modern testing libraries (e.g., Jest, Mocha, Cypress).
- **Version Control**: Use Git for version control. Ensure that you provide a meaningful commit history.

## Submission:
Once you've completed the assignment, push your code to a public GitHub repository.

### Include a README in the repository that explains:
- The architecture and any important design decisions.
- How to run the app (e.g., installation instructions, build commands).
- Any challenges you faced and how you solved them.

## Evaluation Criteria:
- **Code Structure**: Clean, modular, and well-organized code that follows best practices.
- **Frontend Knowledge**: Use of modern JavaScript (ES6+), HTTP/REST, and familiarity with common web development tools.
- **UI/UX**: A user-friendly and functional multi-select component that is easy to interact with.
- **Performance**: Optimized code with minimal reflows and repaints.
- **Creativity & Problem-Solving**: Demonstrating your ability to come up with efficient solutions to handle the filtering and multi-select requirements.
- **Bonus Features**: Bonus points for features like localStorage persistence, responsive design, and advanced CSS techniques.

## Takeaways:
- We’re interested in how you approach solving the problem and your ability to handle technical challenges.
- It’s okay if you don’t finish the entire project—what matters is how you structure your code and how well you communicate your design decisions.
- If you are familiar with a framework like React, Vue, or Angular, feel free to use it. However, demonstrating an understanding of the inner workings of JavaScript and the core concepts behind these frameworks will be a plus.
- Bonus points for using TypeScript or advanced testing strategies.

Good luck, and we look forward to seeing your solution!
