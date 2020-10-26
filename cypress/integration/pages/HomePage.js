class HomePage {

  url = 'https://opentdb.com'
  locators = {
    browseBtn: {
      text: "BROWSE",
      element: 'a'
    },
    apiBtn: {
      text: "API",
      element: 'a'
    }
  }

  visit() {
    cy.visit(this.url);
  }
  
  clickBrowse() {
    cy.get(this.locators.browseBtn.element).contains(this.locators.browseBtn.text).click()
  }

  clickApi() {
    cy.get(this.locators.apiBtn.element).contains(this.locators.apiBtn.text).click()
  }
}

export default HomePage;