# Zustand Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reasons for the Challenge

Much of working with React is learning how to manage global state. Libraries such as Zustand provide the tools and feature to share state between multiple components that go beyond the Context API.

## Examples and Documentation

Zustand resources:

See [https://docs.pmnd.rs/zustand/recipes/](https://docs.pmnd.rs/zustand/recipes/)

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/17a-zustand/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

To stop the application, press `ctrl+c`.

## Acceptance Criteria

You will be refactoring this to use Zustand. This application should keep all of the existing functionality and the state should be managed by Zustand:

- You should create a global store with Zustand's `create` function.
- Your Zustand store should store the number of likes.

The application should also be converted to Typescript.

## Instructions

The application is fully function without Zustand. You will be refactoring this application so that it uses Zustand.

Before you begin, you will need to install Zustand. Run `npm install zustand`.

Create a file called _src/createStore.js_. You will need to setup the here first. The list of Pokemon needs to be stored in the global store.

Once you have completed setting up and using your store, try to see if you can refactor this to TypeScript.
