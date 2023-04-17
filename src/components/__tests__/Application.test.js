import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText, queryByText, getAllByAltText } from "@testing-library/react";

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
    const { container, debug } = render(<Application />);

    // 2. Wait until the text "Archie Cohen" is displayed.
    try {
      await waitForElement(() => getByText(container, "Archie Cohen"));
    } catch (err) {
      console.log(err);
    }

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

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

    // 7. Check that the element with the text "Saving" is displayed.
    const savingIndicator = getByText(appointment, "Saving");
    expect(savingIndicator).toBeInTheDocument();

    // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
    try {
      await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
    } catch (err) {
      console.log(err);
    }

    const [editButton, deleteButton] = getAllByAltText(appointment, /Edit|Delete/);
    const studentName = getByText(appointment, "Lydia Miller-Jones");
    expect(studentName).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();

    // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
    const day = getAllByTestId(container, "day")
      .find(day => queryByText(day, "Monday"));

    const noSpotsRemainingMsg = queryByText(day, /no spots remaining/i);
    expect(noSpotsRemainingMsg).toBeInTheDocument();
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    // 1. Render the Application.
    const { container, debug } = render(<Application />);

    // 2. Wait until the text "Archie Cohen" is displayed.
    try {
      await waitForElement(() => getByText(container, "Archie Cohen"));
    } catch (err) {
      console.log(err);
    }

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[1];

    // 3. Click the "Delete" button on the booked appointment.
    const deleteButton = getByAltText(appointment, "Delete");
    fireEvent.click(deleteButton);

    // 4. Check that the confirmation message is shown.
    const confirmationMessage = getByText(appointment, /Delete appointment?/i);
    expect(confirmationMessage).toBeInTheDocument();

    // 5. Click the "Confirm" button on the confirmation.
    const confirmButton = getByText(appointment, "Confirm");
    fireEvent.click(confirmButton);

    // 6. Check that the element with the text "Deleting" is displayed.
    const deletingIndicator = getByText(appointment, "Deleting");
    expect(deletingIndicator).toBeInTheDocument();

    // 7. Wait until the element with the "Add" button is displayed.
    try {
      await waitForElement(() => getByAltText(appointment, "Add"));
    } catch (err) {
      console.log(err);
    }

    // 8. Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".
    const day = getAllByTestId(container, "day")
      .find(day => queryByText(day, "Monday"));

    const noSpotsRemainingMsg = queryByText(day, /2 spots remaining/i);
    expect(noSpotsRemainingMsg).toBeInTheDocument();
  });
});