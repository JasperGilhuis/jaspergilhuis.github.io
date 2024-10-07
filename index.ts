var possibleEvents = new Set(["input", "onpropertychange", "keyup", "change", "paste"]);

window.onload = () => {

    var weekNumber = getWeekNumber();

    //set the week number in ticksinput text field
    var weeknrInput = document.getElementById("weeknr") as HTMLInputElement;
    weeknrInput.value = weekNumber.toString();
 
};

// get week number from date following first four days of the year a as week one    
function getWeekNumber(): number {
    var date = new Date();
    var onejan = new Date(date.getFullYear(), 0, 1);
    var weekNumber = Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    return weekNumber;
}