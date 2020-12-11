import { Selector } from 'testcafe';

fixture `SpeedScore Interactions`
    .page `http://localhost:3000`;

    test('LoginGoesToActivityFeed', async t => {

        await t
    
        .typeText('#emailInput', 'hundhaus@wsu.edu')
        .typeText('#passwordInput', '123#Eejl;')
        .click('#loginBtn')
        .expect(Selector('#feedModeDiv').visible).eql(true)
        .expect(Selector('#feedMode').classNames).contains("menuItemSelected")
        .click('#menuBtn')
        .expect(Selector('#sideMenu').visible).eql(true)
        .expect(Selector('#topBarTitle').textContent).eql("About Me")
    });
    