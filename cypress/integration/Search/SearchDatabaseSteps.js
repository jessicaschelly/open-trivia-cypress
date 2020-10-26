import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import SearchDatabasePage from "../pages/SearchDatabasePage";

Given('que navego para a página de busca do banco de questões', () => {
  const home = new HomePage()
  home.visit()
  home.clickBrowse()
})

And('digito {string} no campo de busca', (question) => {
  const searchPage = new SearchDatabasePage()
  searchPage.searchInput(question)
})

When('clico no botão de buscar', () => {
  const searchPage = new SearchDatabasePage()
  searchPage.searchClick()
})

Then('visualizo uma mensagem de erro com o texto {string}', (message) => {
  const searchPage = new SearchDatabasePage()
  searchPage.validateMessage(message)
})

When('seleciono a opção {string} no campo do tipo de busca', (category) => {
  const searchPage = new SearchDatabasePage()
  searchPage.changeType(category)
})

Then('visualizo a listagem com o total de {int} itens', (quantity) => {
  const searchPage = new SearchDatabasePage()
  searchPage.checkTableSize(quantity)
})

When('visualizo o controle de paginação', () => {
  const searchPage = new SearchDatabasePage()
  searchPage.paginationExists()
})

When('não visualizo o controle de paginação', () => {
  const searchPage = new SearchDatabasePage()
  searchPage.paginationDoesNotExists()
})





