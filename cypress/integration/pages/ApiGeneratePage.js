class ApiGeneratePage {
  
  locators = {
    numberOfQuestions: "#trivia_amount",
    generateApiBtn: {
      element: "button",
      text: "Generate API URL",
    },
    urlValue: 'https://opentdb.com/api.php?amount='
  }

  setNumberOfQuestions(questions) {
    cy.get(this.locators.numberOfQuestions).clear().type(questions)
  }

  clickOnGenerateApiUrl() {
    cy.get(this.locators.generateApiBtn.element).contains(this.locators.generateApiBtn.text).click()
  }

  checkGeneratedURL(questions) {
    cy.get(`input[value='${this.locators.urlValue + questions}'`).should('exist')
  } 
}

export default ApiGeneratePage

