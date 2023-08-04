$(function () {
    
  // setting time function
 function getTime() {   
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY, "))
    setInterval(getTime, 1000)
}

getTime()
// setting save button 
$(".saveBtn").click(function(){
let dataHour = $(this).parent().data("hour")
console.log(dataHour);
    let timeblockHourId = $(this).parent().attr("id")
    let userInput = $(this).prev().val()
    console.log(timeblockHourId);
    console.log(userInput);
    localStorage.setItem(timeblockHourId, userInput)
})

// setting up code to display color and text for timeblock 
function setColor () {
    let currentHour = dayjs().hour()
    console.log(currentHour);

$(".time-block").each(function () {
let timeblockHour = $(this).data("hour")
console.log(timeblockHour);

if(timeblockHour === currentHour) {
$(this).addClass("present")
}else if (timeblockHour < currentHour) {
    $(this).addClass("past")
}else {
    $(this).addClass("future")
}
})
}

setColor()

// code to save in local storage
function getLocalStorage (){
    $(".description").each(function (){
        let key = $(this).parent().attr("id")
      
        console.log(key);
        $(this).val(localStorage.getItem(key))
    })
}

getLocalStorage()

});








