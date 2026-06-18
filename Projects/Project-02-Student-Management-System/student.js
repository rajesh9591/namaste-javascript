let studentList = [];

//Add Student

function addStudent(name, studentId) {
    const student = {
        name : name,
        studentId : studentId
    };
    studentList.push(student);
    console.log("Student Added:", name);
}

// Get Student By ID
function getStudent(studentId) {
    const student = studentList.find(
        student => student.studentId ===studentId
    );

    if(student) {
        console.log("Student found: ", student);
    } else {
        console.log("Student not found");
    }
}

//Remove Student By ID

function removeStudent(studentId) {
    const studentExist = studentList.some(
        student => student.studentId === studentId
    );

    if(!studentExist) {
        console.log("Student not found");
        return;
    }
    
    studentList = studentList.filter(
        student => student.studentId !== studentId
    );
    console.log("Removed studentID: ", studentId);

}

//List All Students

function listStudents() {
    console.log("\nStudent List:");

    if(studentList.length === 0) {
        console.log("No student found");
        return;
    }
    
    studentList.forEach(student => {
        console.log(
            `ID: ${student.studentId}, Name: ${student.name}`
        );
    });
}

//Total Students

function totalStudents() {
    console.log("Total Students: ", studentList.length);
}

//============================
//Test Cases
//============================
addStudent("Rajesh", 101);
addStudent("Shyam", 102);
addStudent("Mohan", 103);

listStudents();
getStudent(102);
removeStudent(101);
listStudents();
totalStudents();