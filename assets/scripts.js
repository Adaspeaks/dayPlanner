// pulls current hour from moment to check against current time in each section
//had to pull military time variant as to not have run into issue of 1pm being red as 1am
const currentHour = +moment().format("H");

//used to set the current day, month, and year.
//couldn't find a param that got the exact info I wanted had to use 2
const currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, LL"));

//for loop that pops the hour number off the id for each section and checks if they
// are in present past or future. By spliting it on the dash ex. hour-7 equals 7AM
$(".time-block").each(function () {
  const hour = $(this).attr("id").split("-").pop();
  if (currentHour == hour) {
    $(this).addClass("present");
  } else if (currentHour < hour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

//uses tag once again to get the text content out of localstorage on page load
for (i = 7; i < 15; i++) {
  $("#hour-" + i)
    .find("textarea")
    .val(localStorage.getItem("hour-" + i));
}

//used to add text content of each section into local storage by looking at the siblings and parents
// of the element selected.
$(".svBtn").on("click", function () {
  let jobTime = $(this).parent().attr("id");
  let JobDesc = $(this).siblings(".description").val().trim();
  localStorage.setItem(jobTime, JobDesc);
});
