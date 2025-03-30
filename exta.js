// time
function getMonthName(monthNumber) {
    const monthNames = ['January', 'February', 'March', ' April',
        'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
    return monthNames[monthNumber];  
}

function getDayOfWeekName(dayOfWeekNumber) {
    const dayOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday']
    return dayOfWeekNames[dayOfWeekNumber];
}

function time_now() {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const dayOfWeek = dateObj.getDay();
    const dayOfWeekName = getDayOfWeekName(dayOfWeek);
    const month = dateObj.getMonth() + 1;
    const monthName = getMonthName(month);
    const newDate = "Today is " + monthName + " " + day + ", " + year + ", " + dayOfWeekName; 
    document.getElementById('current-date').innerHTML= newDate; 
    let hours = dateObj.getHours() % 12;
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = dateObj.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const format = hours >= 12 ? "PM" : "AM";
    const newTime = "The current time is " + hours + ":" + minutes + " " + format;
    document.getElementById('current-time').innerHTML=newTime;
}

// add student
const submissions = [];

function validateForm(event) {
    event.preventDefault();

    let isValid = true;
    // form values
    const name = document.forms["Form"]["name"].value.trim();
    const age = document.forms["Form"]["age"].value.trim();
    const mail = document.forms["Form"]["mail"].value.trim();
    const course = document.forms["Form"]["course"].value;
    
    const nameError = document.getElementById("nameError");
    const ageError = document.getElementById("ageError");
    const mailError = document.getElementById("mailError");

    const namePattern = /^\s*[A-Za-z]+(\s+[A-Za-z]+)+\s*$/;
    if (!name.match(namePattern)) {
        nameError.textContent = "Please write your first and last name.";
        nameError.style.color = "red";
        isValid = false;
    }
    else {
        nameError.textContent = "";
    }
    
    if (age <= 0 ) {
        ageError.textContent = "Please input a valid age.";
        ageError.style.color = "red";
        isValid = false;
    }
    else {
        ageError.textContent = "";
    }

    const mailPattern = /^[a-zA-Z0-9._%+-]+@up\.edu\.ph$/;
    if (!mail.match(mailPattern)) {
        mailError.textContent = "Please enter a valid UP mail address";
        mailError.style.color = "red";
        isValid = false;
    }
    else {
        mailError.textContent = "";
    }

    if (isValid) {
        const submission = {
            name: name,
            age: age,
            mail: mail,
            course: course
        };

        submissions.push(submission);
        alert("Information Submitted!");
    }
}

document.getElementById("Form").addEventListener("submit", validateForm);


// search student
function find_student(){
    let searchInput = document.getElementById("search-number").value.trim();
    let searchResults = document.getElementById("search-results");

    if(searchInput === ""){
        searchResults.innerHTML ="<p>Please enter a student ID.</p>"
        return;
    } 

    let student = submissions.find(student => student.number === searchInput);  ///hindi pa final to 

    if(student) {
        searchResults.innerHTML = `
        <p><strong>Student Number: </strong> ${student.number}</p>
        <p><strong>Student Name: </strong> ${student.name}</p>
        <p><strong>Student Age: </strong> ${student.age}</p>
        <p><strong>Student UP Mail: </strong> ${student.mail}</p>
        <p><strong>Student Course: </strong> ${student.course}</p>
        `; 
    } else {
        searchResults.innerHTML = "<p>Student record does not exist.</p>"; 
    }
}

// display student
