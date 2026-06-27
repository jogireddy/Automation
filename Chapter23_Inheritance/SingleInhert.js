class basePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Opening the page ");
    }
    close() {
        console.log("Closing the page ");
    }
}

class LoginPage extends basePage {

}
const child = new LoginPage();
child.open();
child.close();
console.log(this.pageName);

