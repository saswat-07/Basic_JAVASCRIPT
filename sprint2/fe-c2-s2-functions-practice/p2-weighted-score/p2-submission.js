//Write solution code
let assignmentWeight=10,projectWeight=35,quizWeight=10,midTermWeight=15,finalExamWeight=30;
let assignmentScore=97,projectScore=82,quizScore=60,midTermScore=75,finalExamScore=80;
let assignmentWeightedScore = (assignmentWeight/100) * assignmentScore;
let projectWeightedScore = (projectWeight/100) * projectScore;
let quizWeightedScore = (quizWeight/100) * quizScore;
let midTermWeightedScore = (midTermWeight/100) * midTermScore;
let finalExamWeightedScore = (finalExamWeight/100) * finalExamScore;
 function calculateTotalWeightedScore(assignmentWeightedScore,projectWeightedScore,quizWeightedScore,midTermWeightedScore,finalExamWeightedScore){

    let overallWeightedScore = assignmentWeightedScore + projectWeightedScore + quizWeightedScore + midTermWeightedScore + finalExamWeightedScore;
    return overallWeightedScore;
 }
console.log(`Assignment Type  Weighted Score` )
console.log(`Assignments   ${assignmentWeightedScore}`);
console.log(`Projects   ${projectWeightedScore}`);
console.log(`Quizzes   ${quizWeightedScore}`);
console.log(`Mid Term    ${midTermWeightedScore}`);
console.log(`Final Exam    ${finalExamWeightedScore}`);

console.log(`The Total Weighted Score is ${calculateTotalWeightedScore(assignmentWeightedScore,projectWeightedScore,quizWeightedScore,midTermWeightedScore,
    finalExamWeightedScore)}%`)