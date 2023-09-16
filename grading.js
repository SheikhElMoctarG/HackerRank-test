function gradingStudents(grades) {
    var gradesAfter = [];
    for (let i = 0; i < grades.length; i++) {
        var grade = grades[i];
        const betweenGrade = (5 -(grade % 5));
        if(betweenGrade < 3){
            if (grade >= 38) {
                grade += betweenGrade;
            }
        }
        gradesAfter[i] = grade;
    }
    return gradesAfter;
}

console.log(gradingStudents([
    73,
    67,
    38,
    33
]));