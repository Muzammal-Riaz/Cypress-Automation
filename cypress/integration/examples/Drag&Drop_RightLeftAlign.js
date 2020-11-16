describe('HaseebMailMunchTest', () => {
            
              beforeEach(() => {
                cy.visit('https://react-email-editor-demo.netlify.app/')
              })  
            
              it('1) Drag & Drop Test', () => {
                cy
                  .get('iframe')
                  .should(iframe => expect(iframe.contents().find('body')))
                  .then(iframe => cy.wrap(iframe.contents().find('body')))
                  .within({}, $iframe => {
                    cy.get('#editor > div > div > div > div > div.sc-fznLxA.dfryBS.blockbuilder-preferences.bootstrap.right > div > div > div > div > div.tab-pane.active > div > div:nth-child(7)').should('have.text', 'Text').drag('#u_column_1 > div > div > div:nth-child(3)', { force: true })
    
                  })
              })  

              it('2) Left Alignment Test', () => {
                cy
                  .get('iframe')
                  .should(iframe => expect(iframe.contents().find('body')))
                  .then(iframe => cy.wrap(iframe.contents().find('body')))
                  .within({}, $iframe => {
                    cy.get('#editor > div > div > div > div > div.sc-fznLxA.dfryBS.blockbuilder-preferences.bootstrap.right > div > div > div > div > div.tab-pane.active > div > div:nth-child(7)').should('have.text', 'Text').drag('#u_column_1 > div > div > div:nth-child(3)', { force: true })
                    cy.contains('This is a new Text block. Change the text.').dblclick({force: true})
                    cy.get('[aria-label="Align right"]').click()
                    cy.get('[aria-label="Align left"]').click()  
                  })
              })
            

            }) 
  
