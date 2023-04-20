describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });

  it("should book an interview", () => {
    // 1. Click the Add button on the open appointment
    cy.get("[alt=Add]")
      .first()
      .click()
      // 2. Enter the name of the student
      .get('[data-testid="student-name-input"]')
      .type("Lydia Miller-Jones", { delay: 60 })
      // 3. Choose an interviewer
      .get("[alt='Tori Malcolm'")
      .click();

    // 4. Click the save button
    cy.contains("Save")
      .click();

    // 5. Verify the booked appointment is seen
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should edit an interview", () => {
    // 1. CLick the Edit button
    cy.get(".appointment__actions-button")
      .first()
      .click({ force: true })
      // 2. Change the interviewer and student
      .get('[data-testid="student-name-input"]')
      .clear()
      .type("Lydia Miller-Jones", { delay: 60 })
      .get("[alt='Tori Malcolm'")
      .click();
    
    // 3. Click the save button
    cy.contains("Save")
      .click();
    
    // 4. Verify the changed appointment is seen
    cy.contains(".appointment__card--show", "Lydia Miller-Jones", "Tori Malcolm");
    
  });
});