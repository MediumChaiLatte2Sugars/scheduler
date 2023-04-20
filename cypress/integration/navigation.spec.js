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
    cy.visit("/");

    cy.contains("Monday");

    // 2. Clicks on the "Add" button in the second appointment
    cy.get("[alt=Add]")
      .first()
      .click()
      .get('[data-testid="student-name-input"]')
      // 3. Enters their name
      .type("Chic Ken", { delay: 60 })
      // 4. Chooses an interviewer
      .get('[alt="Sylvia Palmer"]')
      .click();

    // 5. Clicks the save button
    cy.contains('Save')
      .click();

    // 6. Sees the booked appointment
    cy.get('[data-testid="appointment"]')
      .contains('Chic Ken');
  });

  it("should edit an interview", () => {
    cy.visit("/")
      // 2. Clicks the edit button for the existing appointment
      .get('.appointment__actions-button')
      .first()
      .click({ force: true })
      // 3. Changes the name and interviewer
      .get('[data-testid="student-name-input"]')
      .clear()
      .type("Chic Ken", { delay: 60 })
      .get('[alt="Tori Malcolm"]')
      .click()

    // 4. Clicks the save button
    cy.contains('Save')
      .click()
      // 5. Sees the edit to the appointment
      .get('[data-testid="appointment"]')
      .contains('Chic Ken');
  });

  it("should cancel an interview", () => {
    cy.visit("/")
      // 1. Clicks the delete button for the existing appointment
      .get('.appointment__actions-button')
      .eq(1)
      .click({ force: true });

    // 2. Clicks the confirm button
    cy.contains('Confirm')
      .click();

    // 4. Sees that the appointment slot is empty
    cy.get("[alt=Add]")
      .should('be.visible');
  });
});