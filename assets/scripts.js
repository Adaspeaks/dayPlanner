// set current hour//
const currentHour = +moment().format("H");
//runs through hour html elements places saved tasks. Outside of function so it runs on start up
for (let i = 1; i < 9; i++) {
   $("#hour="+i)
   .find("textarea")
   .val(localStorage.getItem("hour-"=i));
    
};
//Adds Job description and time to local storage//
$(".svBtn").on("click", function (){
    const jobTimeSlot = $(this).parent().attr("id");
    const jobDesc = $(this).siblings(".description").val().trim();
    localStorage.setItem(jobTimeSlot, jobDesc);
});