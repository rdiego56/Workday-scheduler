

function setHourColors(){
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
        $("#hour-" + i + "textare").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + "textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + "textare").addClass("present");
        }
    }
}

function loadStoredData() {
    // Load exisitng data from local storage
}

function handleSaveClick(event) {
    var saveButton = $(event.target);
    // store this hours data in local storage

}

$(function() {
    loadStoredData();
    setHourColors();
});

$('.saveBtn').on('click' ,)