# language: pt

Funcionalidade: Busca no Banco de Questões
    
    Cenário: Busca por questão inexistente
        Dado que navego para a página de busca do banco de questões
        E digito "Science: Computers" no campo de busca
        Quando clico no botão de buscar
        Então visualizo uma mensagem de erro com o texto "No questions found."

    Cenário: Busca por categoria com paginação
        Dado que navego para a página de busca do banco de questões
        E digito "Science: Computers" no campo de busca
        Quando seleciono a opção "Category" no campo do tipo de busca 
        E clico no botão de buscar
        Então visualizo a listagem com o total de 25 itens
        E visualizo o controle de paginação

    Cenário: Busca por usuário sem paginação
        Dado que navego para a página de busca do banco de questões
        E digito "Karen" no campo de busca
        Quando seleciono a opção "User" no campo do tipo de busca 
        E clico no botão de buscar
        Então visualizo a listagem com o total de 1 itens
        E não visualizo o controle de paginação