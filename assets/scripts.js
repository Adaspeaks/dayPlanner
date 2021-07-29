// set current hour//
const currentHour = +moment().format("H");


//Adds Job description and time to local storage//
$(".svBtn").on("click", function (){
    const jobTimeSlot = $(this).parent().attr("id");
    const jobDesc = $(this).siblings(".description").val().trim();
    localStorage.setItem(jobTimeSlot, jobDesc);
});