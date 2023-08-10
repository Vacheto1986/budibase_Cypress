/// <reference types="cypress" />

// 1. create an app
// 2. Create a table
// 3. Create a user group
// 4. Add a user mishoiskam@gmail.com

describe('budibase explore', () => {

    it('create an app', () => {

        cy.visit('https://hristov.budibase.app/')
        cy.get('[type="text"].svelte-1xkimai').type('hristof86@gmail.com')
        cy.get('[type="password"].svelte-1xkimai').type('Plamena1')
        cy.get('[class="spectrum-Button spectrum-Button--sizeL svelte-1pl0gz5 spectrum-Button--cta new-styles"]').click()
        cy.get('[class="spectrum-Button spectrum-Button--sizeM svelte-s9bbw spectrum-Button--cta new-styles"]').click()
        cy.get('[class="buttons svelte-jw82ro"]')
            .find('[class="spectrum-Button spectrum-Button--sizeM svelte-s9bbw spectrum-Button--cta new-styles"]')
            .contains('Start from scratch')
            .parent()
            .click()

        cy.get('input[placeholder="Ivans app"]').clear().type('QA1')
        cy.get('[class="spectrum-Dialog svelte-1mvi9av spectrum-Dialog--small"][role="dialog"]')
            .find('[class="spectrum-Button spectrum-Button--sizeM svelte-s9bbw spectrum-Button--cta new-styles"]')
            .click()

        // cy.get('[class="option svelte-16hdnry"]')
        //     .find('[class="spectrum-Body spectrum-Body--sizeM"]')
        //     .contains('Create new table')

        cy.get('[class="svelte-125w85w"]').click()

        cy.get('[type="text"][class="spectrum-Textfield-input"]').type('')

    })

})