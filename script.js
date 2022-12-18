const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");


 
let date  = new Date(); // Getting new date, current year and  current month
// console.log(date);
let currentYear = date.getFullYear();
// console.log(currentYear);
let currentMonth = date.getMonth();
// console.log(currentMonth);
// console.log(date,currentYear,currentMonth);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalender = () =>{
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // getting first day of month
    // console.log(firstDayOfMonth);
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of month
    // console.log(lastDateOfMonth);
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(); // getting last day of  month
    // console.log(lastDayOfMonth);
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month
    // console.log(lastDateOfLastMont);

    let liTag = "";
    for(let i = firstDayOfMonth; i>0; i--){ // creating li of previous month last days
        liTag +=`<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    
     
    for(let i = 1; i <= lastDateOfMonth; i++){ // creating li of all days of current month
        // console.log(i);
        // adding active class to do li if the current day, month and year matched

        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear ===new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;

        // console.log(liTag);
        // console.log(isToday);
    }

    for(let i = lastDayOfMonth; i < 6; i++){ // creating li of next month first days
        liTag += `<li class="inactive">${ i - lastDayOfMonth  + 1} </li>`;
        // console.log(liTag);
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    // console.log(currentDate);
    daysTag.innerHTML = liTag;
    // console.log(daysTag);


}
renderCalender();
// adding click event on the  previous and next icon
prevNextIcon.forEach( icon => {
    icon.addEventListener("click", () => { //
        // console.log(icon);
        // if clicked icon is previous icon then decrement current month by 1 and increment it by 1
        currentMonth = icon.id === "prev" ? currentMonth -1 : currentMonth + 1;
        // console.log(currentMonth);

        // next year when current yaer end
        if(currentMonth <0 || currentMonth > 11){
            // creating a new date of current year & month and pass it as date value
            date = new Date(currentYear, currentMonth); 
            currentYear = date.getFullYear(); // updating current yaer with new date year
            currentMonth = date.getMonth();   // updating current month wiht new date month
        }
        else{ // else pass new Date as date value
            date  = new Date();
        }
        renderCalender();
    });


});