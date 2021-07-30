const currentHour = +moment().format("H");

const currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, LL"));

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

$(".svBtn").on("click", function () {
  let jobTime = $(this).parent().attr("id");
  let JobDesc = $(this).siblings(".description").val().trim();
  localStorage.setItem(jobTime, JobDesc);
});
