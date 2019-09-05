function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = new Date(dateString).getDay();
    return isNaN(dayName) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayName];
}