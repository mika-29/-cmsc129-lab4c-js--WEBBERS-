// add student
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
// search student

// display student
