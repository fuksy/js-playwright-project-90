
    export const authlocators = {
    authlogin : '//input[@name = "username"]',
    authpass :  '//input[@name="password"]',
    authbutton: '//button[@type="submit"]',
    profilebutton: '//button[@aria-label="Profile"]',
    logoutbutton: '//ul[@class="MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list" and @role="menu"]'


    }
    export const userslocators = {
        usersbutton : '//button[@href="#/users"]',
        usercreatebutton: '//a[@href="#/users/create"]',
        useremailinput: '//input[@name="email"]',
        usernameinput: '//input[@name="firstName"]',
        userlastnameinput: '//input[@name="lastName"]',
        savebutton: '//button[@aria-label="Save"]',
        creatednotification: '//div[contains(text(),"Element created")]',
    }