/* declare current hour
declare current day HTML element
declare time entries containerhtml element */

var date = $("#currentDay");
var container = $(".container");
var hour = $(".block");

var containerEl;

// render a block for each hour of the day
for (var i = 0; i <= 17; i++) {
    var key = "hour-"+i;
    // attempt to get the saved data for the hour of the loop
    var data = "";

// compare i to current hour to determine if this hour is in the past, present, or future

var template = `
    <div class = "row">
        <div>
             ${i}AM
        </div>
        <div>
            <textarea>${data}</textarea>
        </div>
        <div>
            <button data-hour =${i}>Save</button>
        </div>
     </div>  `
}

// set up a click event listener on the container
containerEl.on("click", button, function(event) {
    // fetch the hour from the clicked button's (event.target) data-hour attribute
    // use the hour to create the key for the local storage
    // from the clicked button traverse the DOM to the nearby <textarea> to fetch  its value
    // use the key and the value to save into localstorage
});