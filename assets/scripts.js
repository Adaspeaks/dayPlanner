const currentHour = +moment().format("H");

const currentDay = moment();
$("#currentDay").text(currentDay.format("dddd"))
