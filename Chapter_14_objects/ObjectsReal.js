let config = {}; // Empty object

config.browser = "chrome";
config.timeout = 5000;
config.testname = "Login Test";

console.log(config)

delete config.browser;
console.log(config)


if (config.browser ==="chrome"){
    console.log("I will exceute my TC")
}

let config2= {
    browser : "chrome",
    timeout : 5000,
    testname : "Login Test"
};