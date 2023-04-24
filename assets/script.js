var eventsData;

function setHourColors(){
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
        // $("#hour-" + i + "textare").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + "textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + "textare").addClass("present");
        }
    }
}

function loadStoredData() {
    var eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            // etc continue on
        };
    }
    // Load exisitng data from local storage
}

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.after('id').split("-")[1];

    // modify data object
    eventsData["hour" + hour] = value;

    // store in local storage
    localStorage.setItem("calenderEvents" , JSON.stringify(eventsData))

}

$(function() {
    loadStoredData();
    setHourColors();
});

$('.saveBtn').on('click' ,)