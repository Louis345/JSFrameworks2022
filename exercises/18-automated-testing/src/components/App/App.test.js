import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

// Example 1
test("should render a heading", () => {
  render(<App />);
  // Finds the element on the page that says "My Links"
  screen.getByText("My Links"); // If this isn't found, this will throw an error, which will fail the test
});

// Example 2
it("should render three links to the screen when the component first mounts", () => {
  render(<App />);

  // Find links by test ID
  // @see https://testing-library.com/docs/queries/bytestid
  const links = screen.getAllByTestId(/link-/);
  expect(links).toHaveLength(3);

  // Test the DOM (<a href="this_is_an_attribute">This is textContent</a>)
  expect(links[0]).toHaveTextContent("React Testing Library Cheatsheet");
  expect(links[0]).toHaveAttribute(
    "href",
    "https://testing-library.com/docs/react-testing-library/cheatsheet"
  );
});

// Example 3
it('should include a textbox called "Link" and the user can type in this textbox', async () => {
  render(<App />);

  // Fills out textbox
  const textbox = screen.getByLabelText("Link");
  fireEvent.change(textbox, {
    target: { value: "http://www.somewhere.com" },
  });

  // Waits for textbox to be filled out
  // and passes the test if textbox with "http://www.somewhere.com" is on the page
  await screen.findByDisplayValue("http://www.somewhere.com"); // If this isn't found, this will throw an error, which will fail the test
});

/**
 * Write a test to check and see that "Here are my favorite sites:" renders on the screen
 * @see https://testing-library.com/docs/dom-testing-library/cheatsheet
 * @see https://testing-library.com/docs/queries/about
 */

it("should render the header 'here are my favorite sites'", async () => {
  render(<App />);
  screen.getByText("Here are my favorite sites:");
});

/**
 * Write a test that checks to see if two buttons renders on the screen
 * @see https://testing-library.com/docs/dom-testing-library/cheatsheet
 * @see https://jestjs.io/docs/expect#tohavelengthnumber
 */
it("should render two buttons on the home screen", async () => {
  render(<App />);
  screen.getByTestId("button-add");
  screen.getByTestId("button-hide");
});

/**
 * Write a test to see if there a textbox called "Link Title" and test that the user can type in this textbox
 * @see https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
 * @see https://testing-library.com/docs/dom-testing-library/api-async#findby-queries
 */

it("should render a textbox called 'Link Title' that a user can type in", async () => {
  render(<App />);
  const textBox = screen.getByLabelText("Link Title");
  fireEvent.change(textBox, {
    target: { value: "Google" },
  });

  await screen.findByDisplayValue("Google");
});

// Remove the `.skip` when you are ready to write this test
it("should hide the links when the hide button is clicked", async () => {
  render(<App />);

  fireEvent.click(screen.getByTestId("button-hide"));
  const links = screen.queryAllByTestId(/link-/);
  await expect(links).toHaveLength(0);
  /**
   * Complete me.
   * @see exercises/17-automated-testing/src/components/Links/Links.jsx
   * or start this application and inspect what you see on the screen.
   *
   * Think about how you can test and see that no links are on the page.
   *
   * Hint. You probably going to have to use "queryAllBy..." instead of "getAllBy..." so it this does not throw an error.
   * @see https://testing-library.com/docs/queries/about
   */
});

// Remove the `.skip` when you are ready to write this test
it("should add the user input to the new link on the screen when the add button is clicked", async () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText("Link Title"), {
    target: { value: "Google" },
  });
  fireEvent.change(screen.getByLabelText("Link"), {
    target: { value: "www.Google.com" },
  });
  fireEvent.click(screen.getByTestId("button-add"));
  const links = screen.queryAllByTestId(/link-/);
  await expect(links[3]).toHaveTextContent("Google");
  /**
   * Complete me.
   * @see exercises/17-automated-testing/src/components/Links/Links.jsx
   * or start this application and inspect what you see on the screen.
   *
   * You are going to have to fill out the textboxes in the form and click on the "Add User" button.
   * @see https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
   * @see https://testing-library.com/docs/dom-testing-library/api-events
   */
});
