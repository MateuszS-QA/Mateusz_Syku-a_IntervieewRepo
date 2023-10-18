describe('Intervieew task', () => {

it('Nieprawidłowy link URL przekierowuje do strony głównej', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/randominvalidlinkilikepancackes');
    cy.contains("span",'Recruitment app is running!');
})
it('New Component button - Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'New Component').click();
  cy.contains("div.terminal", "ng generate component xyz");
}) 
it('Angular Material - Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'Angular Material').click();
  cy.contains("div.terminal", "ng add @angular/material");
}) 
it('Add PWA Support - Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'Add PWA Support').click();
  cy.contains("div.terminal", "ng add @angular/pwa");
}) 
it('Add Dependency -  Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'Add Dependency').click();
  cy.contains('div.terminal', "ng add _____");
}) 
it('Run and Watch Tests - Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'Run and Watch Tests').click();
  cy.contains("div.terminal", "ng test");
}) 
it('Build for Production - Weryfikacja dynamicznych treści', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('button', 'Build for Production').click();
  cy.contains("div.terminal", "ng build");
}) 

it('Trimming pól tekstowych', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('a', 'Form').click();
  cy.get("input[name='name']").clear();
  cy.get("input[name='name']").type('John    ');
  cy.get("input[name='alterEgo']").clear();
  cy.get("input[name='alterEgo']").type('Alter Ego   ');
  cy.get("select[name='power']").select('Super Hot');
  cy.contains('button', 'Submit').click();
  cy.contains("div.row",'John');
  cy.contains("div.row",'Alter Ego');
  cy.contains('a', 'Stepper').click();
  cy.get("input[id='mat-input-0']").type('John    ');
  cy.contains('button', 'Next').click();
  cy.get("input[id='mat-input-1']").type('Test Str. 1/23    ');
  cy.contains('button', 'Next').click({force:true});
  cy.get('div').contains("Name: John");
  cy.get('div').contains("Address: Test Str. 1/23");
}) 

 it('Form E2E flow - test pozytywny', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Form').click();
    cy.get("input[name='name']").clear();
    cy.get("input[name='name']").type('TEST NAME');
    cy.get("input[name='alterEgo']").clear();
    cy.get("input[name='alterEgo']").type('TEST ALTER EGO');
    cy.get("select[name='power']").select('Super Hot');
    cy.contains('button', 'Submit').click();
    cy.contains("div.row",'TEST NAME');
    cy.contains("div.row",'TEST ALTER EGO');
    cy.contains("div.row",'Super Hot');
    cy.contains('button', 'Edit').click();
    cy.contains('button', 'New Hero').click();
    cy.get("input[name='name']").type('TEST NAME EDIT');
    cy.get("input[name='alterEgo']").type('TEST ALTER EGO EDIT');
    cy.get("select[name='power']").select('Weather Changer');
    cy.contains('button', 'Submit').click();
    cy.contains("div.row",'TEST NAME EDIT');
    cy.contains("div.row",'TEST ALTER EGO EDIT');
    cy.contains("div.row",'Weather Changer');
 }) 

    it('Stepper E2E flow - test pozytywny', () => {
  cy.visit('https://angular-qa-recruitment-app.netlify.app/');
  cy.contains('a', 'Stepper').click();
  cy.get("input[id='mat-input-0']").type('TEST NAME');
  cy.contains('button', 'Next').click();
  cy.get("input[id='mat-input-1']").type('Test Str. 1/23');
  cy.contains('button', 'Next').click({force:true});
  cy.get('div').contains("Name: TEST NAME ");
  cy.get('div').contains("Address: Test Str. 1/23");
  cy.contains('button', 'Back').click({force:true});
  cy.contains('button', 'Back').click({force:true});
  cy.get("input[id='mat-input-0']").type(' EDIT');
  cy.contains('button', 'Next').click();
  cy.get("input[id='mat-input-1']").type(' EDIT');
  cy.contains('button', 'Next').click({force:true});
  cy.get('div').contains("Name: TEST NAME EDIT");
  cy.get('div').contains("Address: Test Str. 1/23 EDIT");
  })

it('Stepper - weryfikacja walidacji', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Stepper').click();
    cy.get("input[id='mat-input-0']").click();
    cy.contains('button', 'Next').click({force:true});
    cy.get('div').contains("This field is required.");
    cy.get("input[id='mat-input-0']").type('TEST NAME TEST NAME TEST NAME TEST NAME TEST NAME');
    cy.get('div').contains("The maximum length for this field is 20 characters.");
    cy.get("input[id='mat-input-0']").clear();
    cy.get("input[id='mat-input-0']").type('TEST NAME');
    cy.contains('button', 'Next').click({force:true});
    cy.get("input[id='mat-input-1']").click();
    cy.contains('button', 'Next').click({force:true});
    cy.get('div').contains("This field is required.");
    cy.get("input[id='mat-input-1']").type('TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST');
    cy.get('div').contains("The maximum length for this field is 30 characters.");
    cy.get("input[id='mat-input-1']").clear();
    cy.get("input[id='mat-input-1']").type('TEST Address 1/2');
    cy.contains('button', 'Next').click({force:true});
  })
 
   it('Learn Angular - przekierowanie', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Learn Angular').click();
  })
  it('CLI Documentation - przekierowanie', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'CLI Documentation').click();
  }) 
  it('Angular Blog - przekierowanie', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Angular Blog').click();
  }) 
  it('DevTools - przekierowanie', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Angular DevTools').click();
  }) 
  it('Give our repo a star - przekierowanie ', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Give our repo a star').click();
  }) 
  it('Star button - przekierowanie', () => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    cy.contains('a', 'Star').click();
  }) 

})