# Professional README Generator - M9C

    This is a node.js application to generate a readme file after answering a series of questions.

## Demo of Application

[Video Demo]()

## Required Installation

[Inquirer Package](https://www.npmjs.com/package/inquirer/v/8.2.4)

## User Stories

    AS A developer
    I WANT a README generator
    SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

    GIVEN a command-line application that accepts user input

    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README

    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    WHEN I enter my project title
    THEN this is displayed as the title of the README

    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

## Notes

This seemed like an about face in terms of web development. This is my first taste of using a server-side application to automate a tool. Some of the features in ES6 are still new and I am still getting used to using their functionality. As far as the acceptance criteria I somehow missed the depth of creating the badges and I am missing a simple aspect of getting the data to create a link on the generated page. 