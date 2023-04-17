import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText, getByAltText, queryByText } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday"))
      .then(() => {
        fireEvent.click(getByText("Tuesday"));

        expect(getByText(/Leopold Silvers/i)).toBeInTheDocument();
      });
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    // 1. Render the Application.
    const { container } = render(<Application />);
    // console.log(prettyDOM(container));

    // 2. Wait until the text "Archie Cohen" is displayed.
    try {
      await waitForElement(() => getByText(container, "Archie Cohen"));
      // console.log(prettyDOM(container));
    } catch (err) {
      console.log(err);
    }

    const appointments = getAllByTestId(container, "appointment");
    // console.log(prettyDOM(appointments));

    const appointment = getAllByTestId(container, "appointment")[0];

    // 3. Click the "Add" button on the first empty appointment.
    const addButton = getByAltText(appointment, "Add");
    fireEvent.click(addButton);

    // 4. Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
    const inputField = getByPlaceholderText(appointment, "Enter Student Name");
    fireEvent.change(inputField, {
      target: { value: "Lydia Miller-Jones" }
    });

    // 5. Click the first interviewer in the list.
    const firstInterviewerButton = getByAltText(appointment, "Sylvia Palmer");
    fireEvent.click(firstInterviewerButton);
    
    // 6. Click the "Save" button on that same appointment.
    const saveButton = getByText(appointment, "Save");
    fireEvent.click(saveButton);
    console.log(prettyDOM(appointment));


    // 7. Check that the element with the text "Saving" is displayed.
    // expect(queryByText("Saving"))
    // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
    // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".

  });
});
