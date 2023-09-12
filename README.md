# Shape Area Calculator

This web app allows users to calculate the area of different shapes. The user can switch between these shapes using tabs and input the required parameters for each shape. The calculated area is displayed on the page.

## Code Overview

### HTML (`index.html`)

- The HTML file provides the structure of the web page.
- It contains tab buttons for selecting the shape.
- Input fields for each shape type are displayed conditionally based on the selected tab.
- A "Calculate Area" button triggers the area calculation, and the result is displayed.

### CSS (`styles.css`)

- The CSS file defines the styling for the web page, including fonts, colors, and layout.

### JavaScript (`script.js`)

- The JavaScript file handles the functionality of the Shape Area Calculator.
- The calculated area or error message is displayed in the result div.
- Input fields are cleared after each calculation.

## Use of Classes

The code defines a `ShapeCalculator` class with static methods for calculating the area of different shapes. The `ShapeCalculator` class contains different methods for calculating area of different shapes.

Using a class allows for cleaner code organization and better separation of concerns.

## Use of Switch Statements

The `switch` statement is used to determine which shape is selected and perform the corresponding area calculation:

- When a tab is clicked, the `setActiveTab` function is called, which sets the active tab and controls the display of input fields.
- In the "Calculate Area" button click event, the `switch` statement checks the active tab and performs the appropriate area calculation based on the selected shape.

Switch statements provide a convenient way to handle multiple cases and execute different code blocks based on a specified condition, making the code more readable and maintainable.

## Use of Try-Catch

The `try-catch` block is used to handle exceptions or errors that may occur during the execution of the code. Here's how it is used:

- Inside the `try` block, the code attempts to perform calculations based on the selected shape.
- If an error occurs, such as invalid input or calculations that may throw exceptions, it is caught in the `catch` block.
- The error message is displayed to the user in the result div and logged in the console.
- Regardless of whether an error occurs or not, the `finally` block ensures that input fields are cleared after each calculation.

---

This Shape Area Calculator web application demonstrates the use of try-catch, classes, and switch statements to provide a user-friendly and error-handling mechanism for calculating the areas of different shapes.