/// <reference types="cypress" />

describe('Testes para a página de agendamento de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve fazer a inclusão de contato', () => {
        cy.get('[type="text"]').type('Daniel')
        cy.get('[type="email"]').type('danielmc@email.com')
        cy.get('[type="tel"]').type('19996427551')
        cy.get('.adicionar').click()
    })

    it('Deve editar o contato criado', () => {
        cy.get('.edit').last().click()
        cy.get('[type="email"]').clear().type('danielmcardoso2016@email.com')
        cy.get('.alterar').click()
    })

    it('Deve excluir o nome criado', () => {
        cy.get('.delete').last().click()
    })
})