
    export const authlocators = {
    authlogin : '//input[@name = "username"]',
    authpass :  '//input[@name="password"]',
    authbutton: '//button[@type="submit"]',
    profilebutton: '//button[@aria-label="Profile"]',
    logoutbutton: '//ul[@class="MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list" and @role="menu"]'

    }
    export const baselocators = {
        fillermessage: "//div[@class='MuiCardContent-root css-1lt5qva-MuiCardContent-root'  and contains(text(),'Lorem ipsum sic dolor amet...')]"
    }

    
    export const userslocators = {
        usersbutton : '//a[@href="#/users" and contains(text(), "Users")]',
        usercreatebutton: '//a[@href="#/users/create"]',
        useremailinput: '//input[@name="email"]',
        usernameinput: '//input[@name="firstName"]',
        userlastnameinput: '//input[@name="lastName"]',
        savebutton: '//button[@aria-label="Save"]',
        creatednotification: '//div[@class="MuiSnackbar-root MuiSnackbar-anchorOriginBottomCenter css-cjae3w-MuiSnackbar-root-RaNotification-root and contains(text(),"Element created")"]',
        chckboxUser: '(//input[@class="PrivateSwitchBase-input css-1m9pwf3"])[2]',
        deletebutton: '//button[@aria-label="Delete"]',
        chckboxallUser: '(//input[@class="PrivateSwitchBase-input css-1m9pwf3"])[1]',
        userelementTable: '//tr[@class="MuiTableRow-root MuiTableRow-hover RaDatagrid-row RaDatagrid-rowEven RaDatagrid-selectable RaDatagrid-clickableRow css-1q1u3t4-MuiTableRow-root"][1]'
    }