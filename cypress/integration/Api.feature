# language: pt

Funcionalidade: Gerar URL da API Trivia Database

    Cenario: Gerar uma URL válida da API da Trivia Database com número de questões válido 
        Dado que navego para a página de geração de API URL 
        Quando altero o valor de questões para 21
        E clico no botão Generate API URL
        Então visualizo a URL gerada com o valor de questões 21
    
