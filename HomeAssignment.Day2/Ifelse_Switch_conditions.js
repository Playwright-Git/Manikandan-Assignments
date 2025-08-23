// Function to call broswer launch with if else condition
function launchBrowser(browserName) {
    if (browserName.toLowerCase()=== 'chrome') {
        console.log(browserName + " browser launched successfully!")
    } else if(browserName.toLowerCase()=== 'safari'){
        console.log(browserName + " browser launched successfully!")
    }else if(browserName.toLowerCase()=== 'edge'){
        console.log(browserName + " browser launched successfully!")
    }
}
// Function calls
console.log("Simplified Browser Launch");
launchBrowser("Chrome");




// Function to call runtests with switch case condition
function runTests(testType){
switch(testType.toLowerCase()){
    case(testType= "smoke"):
    console.log("Run smoke test")
    break

     case (testType= "sanity"):
         console.log("Run sanity test")
    break

     case (testType= "regression"):
        console.log("Run regression test")
    break

     default:
     console.log("Run smoke test as default")

}
}
// Calling the function with different test types
console.log("\ncalling runtests switch function");
runTests("Smoke");
runTests("Sanity");
runTests("Regression");
runTests(''); // This will trigger default case
