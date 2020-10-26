import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import ApiGeneratePage from "../pages/ApiGeneratePage";

Given('que navego para a página de geração de API URL', () => {
    const home = new HomePage()
    home.visit()
    home.clickApi()
})

When('altero o valor de questões para {int}', (questions) => {
    const apiPage = new ApiGeneratePage()
    apiPage.setNumberOfQuestions(questions)
})

When('clico no botão Generate API URL', () => {
    const apiPage = new ApiGeneratePage()
    apiPage.clickOnGenerateApiUrl()
})

Then('visualizo a URL gerada com o valor de questões {int}', (questions) => {
    const apiPage = new ApiGeneratePage()
    apiPage.checkGeneratedURL(questions)
})