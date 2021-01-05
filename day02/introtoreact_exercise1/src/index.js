import React from "react";
import ReactDOM from "react-dom";

// JavaScript logic:
const firstName = 'Sarah';
const currentYear = new Date().getFullYear();
const getHeaderColor = () => {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour <= 11) {
        return 'red'; // 12AM - 11:59AM
    }
    if (hour < 18) {
        return 'green'; // 12PM - 5:59PM
    }
    return 'blue'; // on or after 6PM
};
const headerStyles = {color: getHeaderColor()};


// Adding tags + values to the DOM:
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1 style={headerStyles}>Hello World</h1>
    <p>This is a paragraph. Here is a list:</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <p className="createdBy">Created by {firstName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  rootElement
);

//Create a react app from scratch
//Have it display a Paragraph with a heading and a body
//Display a list of ANYTHING.
//Created by YOURNAME.
//Copyright CURRENTYEAR. (Bonus points for making a dynamic Current year)

//Style your classes

//Always use console.log("") to log variables.

//use the style.css to make the fontj size of the "Created by YOURNAME." to be 30px

//extra credit
// Dynamically change the color of the h1 using inline css styles.

//ie Morning = red, Afternoon= green, night = blue

//hint = const date = new Date():
//const currentTime = date.getHours():

//To access a Javascript object we do ObjectName.Attribute
