// Function to evaluate student's score and return grade
function evaluateGrade(score) {
    let grade;
    
    // Using switch statement with true to evaluate score ranges
    switch(true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score! Please enter a score between 0 to 100.';
    }
    
    return grade;
}

// Calling the function with different scores and printing results
console.log('=== Student Grade Evaluation ===');

let score1 = 95;
console.log(`Score: ${score1} → Grade: ${evaluateGrade(score1)}`);

let score2 = 85;
console.log(`Score: ${score2} → Grade: ${evaluateGrade(score2)}`);

let score3 = 75;
console.log(`Score: ${score3} → Grade: ${evaluateGrade(score3)}`);

let score4 = 65;
console.log(`Score: ${score4} → Grade: ${evaluateGrade(score4)}`);

let score5 = 55;
console.log(`Score: ${score5} → Grade: ${evaluateGrade(score5)}`);

let score6 = 105;
console.log(`Score: ${score6} → Grade: ${evaluateGrade(score6)}`);

let score7 = -5;
console.log(`Score: ${score7} → Grade: ${evaluateGrade(score7)}`);