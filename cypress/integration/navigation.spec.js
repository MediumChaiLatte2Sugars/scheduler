describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.get("li")
      .contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });

  it("should book an interview", () => {
    cy.visit("/")
      // 2. Clicks on the "Add" button in the second appointment
      .get(':nth-child(2) > .appointment__add > .appointment__add-button')
      .click()
      .get('[data-testid="student-name-input"]')
      // 3. Enters their name
      .type("Chic Ken", { delay: 60 })
      // 4. Chooses an interviewer
      .get(':nth-child(1) > .interviewers__item-image')
      .click()
      // 5. Clicks the save button
      .get('.button--confirm')
      .click()
      // 6. Sees the booked appointment
      .get('[data-testid="appointment"]')
      .contains('Chic Ken');
  });

  it("should edit an interview", () => {
    cy.visit("/")
      // 2. Clicks the edit button for the existing appointment
      .get('.appointment__actions-button').first()
      .invoke('show')
      .click()
      // 3. Changes the name and interviewer
      .get('[data-testid="student-name-input"]')
      .clear()
      .type("Chic Ken", { delay: 60 })
      .get(':nth-child(2) > .interviewers__item-image')
      .click()
      // 4. Clicks the save button
      .get('.button--confirm')
      .click()
      // 5. Sees the edit to the appointment
      .get('[data-testid="appointment"]')
      .contains('Chic Ken');

  });
});