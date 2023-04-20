describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/")
    cy.contains("Monday")
  })
  
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
});