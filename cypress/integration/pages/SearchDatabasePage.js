
class SearchDatabasePage {
  
  locators = {
    query: "#query",
    searchBtn: {
      element: 'button',
      text: 'Search'
    },
    alertMessageNotfound: {
      element: 'div'
    },
    questionType: '#type',
    table: ".table",
    pagination: ".pagination"
  }

  searchInput(question) {
    cy.get(this.locators.query).type(question)
  }

  searchClick() {
    cy.get(this.locators.searchBtn.element).contains(this.locators.searchBtn.text).click()
  }

  validateMessage(message) {
    cy.get(this.locators.alertMessageNotfound.element).contains(message).should('exist')
  }

  changeType(category) {
    cy.get(this.locators.questionType).select(category)
  }

  checkTableSize(quantity) {
    cy.get(this.locators.table).find('tbody').children().should('have.length', quantity)
  }

  paginationExists(){
    cy.get(this.locators.pagination).should('exist')
  }

  paginationDoesNotExists(){
    cy.get(this.locators.pagination).should('not.exist')
  }
}
  

export default SearchDatabasePage;