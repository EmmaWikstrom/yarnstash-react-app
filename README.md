# Yarn Stash

A React application for managing a personal yarn collection.
Designed to make it easy to keep track of your yarn and quickly find what you need.

## Features
- View yarn from an external API
- Add new yarn items
- Edit existing items
- Delete items
- Instant UI updates without page reload
- Feedback messages for user actions
- Clean and intuitive interface

## Tech Stack
- React
- JavaScript (ES6+)
- CSS
- Custom REST API (Node.js, Express, MongoDB)

## Purpose

The goal of this project was to practice core React concepts:

- Component-based architecture
- State management with hooks
- Handling forms and user input
- Updating UI dynamically
- Integrating with an API

## Getting Started

1. Clone the repository
2. Install dependencies using: npm install
3. Start the development server using: npm start

## Notes

The application fetches initial data from a custom API.
The API is hosted on a free tier service and may take up to 30–50 seconds to respond on the first request if it has been inactive. This is due to the server going into sleep mode.
Add, edit and delete actions are currently handled in React state to ensure a fast and responsive UI.

## Future Improvements
- Persist add/edit/delete to the API
- Improve form validation and user feedback
- Add detailed item view
- Enhance UI polish and interactions

## Live Demo 

[Open Yarn Stash](https://yarnstash-sooty.vercel.app/)

## Author

Emma Wikström
