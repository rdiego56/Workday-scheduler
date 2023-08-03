$(function () {
    
    
 function getTime() {   
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY, "))
    setInterval(getTime, 1000)
}

getTime()

$(".saveBtn").click(function(){
let dataHour = $(this).parent().data("hour")
console.log(dataHour);
    let timeblockHourId = $(this).parent().attr("id")
    let userInput = $(this).prev().val()
    console.log(timeblockHourId);
    console.log(userInput);
    localStorage.setItem(timeblockHourId, userInput)
})

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

function getLocalStorage (){
    $(".description").each(function (){
        let key = $(this).parent().attr("id")
        // $(this).val(localStorage.getItem())
        console.log(key);
        $(this).val(localStorage.getItem(key))
    })
}

getLocalStorage()

});







// var eventsData;

// function setHourColors(){
//     var now = dayjs();
//     for (var i = 9; i < 18; i++) {
//         // $("#hour-" + i + "textare").removeClass("future");
//         if (i < now.hour()) {
//             $("#hour-" + i + "textarea").addClass("past");
//         } else if (i == now.hour()) {
//             $("#hour-" + i + "textare").addClass("present");
//         }
//     }
// }

// function loadStoredData() {
//     var eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
//     if (!eventsData) {
//         eventsData = {
//             hour9: "",
//             hour10: "",
//             hour11: "",
//             hour12: "",
//             hour13: "",
//             hour14: "",
//             hour15: "",
//             hour16: "",
//             hour17: "",
//             // etc continue on
//         };
//     }
//     // Load exisitng data from local storage
// }

// function handleSaveClick(event) {
//     // grab data from HTML
//     var hourBlock = $(event.target).parent();
//     var value = hourBlock.children("textarea").val();
//     var hour = hourBlock.after('id').split("-")[1];

//     // modify data object
//     eventsData["hour" + hour] = value;

//     // store in local storage
//     localStorage.setItem("calenderEvents" , JSON.stringify(eventsData))

// }

// $(function() {
//     loadStoredData();
//     setHourColors();
// });

// $('.saveBtn').on('click' ,)