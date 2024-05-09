const currentDate = new Date()
console.log(currentDate.getFullYear())
let currentday = currentDate.getDate();
let currentmonth = currentDate.getMonth() + 1;
let currentyear = currentDate.getFullYear();
const arrow = document.querySelector(".arrow")
arrow.addEventListener("click", ()=> {
    const day = document.querySelector(".day")
    const dayValue = parseInt(day.value)
    const month = document.querySelector(".month")
    const monthValue = parseInt(month.value)
    const year = document.querySelector(".year")
    const yearValue = parseInt(year.value)
    const spans = document.querySelectorAll("span")

    const invalid = document.querySelectorAll(".invalid")
    const labels = document.querySelectorAll("label")
    const inputs = document.querySelectorAll("input")
    const errMessage = document.querySelectorAll(".errMessage")
    console.log(dayValue, monthValue, yearValue)
 
    

    const userDate = new Date(yearValue, monthValue -1, dayValue)
    const lastDayOfMonth = new Date (yearValue, monthValue, 0).getDate()
    console.log(lastDayOfMonth)
    if (monthValue<1 ||monthValue> 12 || dayValue< 1 || dayValue > lastDayOfMonth || yearValue> currentDate.getFullYear()) {
        inputs.forEach(item=> {
            item.style.borderColor = "red"
        })
        labels.forEach(item=> {
            item.style.color = "red"
        })
        if(monthValue<1 || monthValue >12){
            errMessage[1].style.display = "none"
            invalid[1].style.display = "inline"
           
        }
        if(dayValue<1 || dayValue > lastDayOfMonth){
            errMessage[0].style.display = "none"
            invalid[0].style.display = "inline"
          
        }
        if(yearValue> currentDate.getFullYear()){
            errMessage[2].style.display = "none"
            invalid[2].style.display = "inline"
          
        }
        console.log("invalid")
    } else {
        
        /* (dayValue = NaN) || (monthValue= NaN) || (yearValue = NaN) */
        if(isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)){
            console.log("hi")
            inputs.forEach(item=> {
                item.style.borderColor = "red"
            })
            labels.forEach(item=> {
                item.style.color = "red"
            })
            if (isNaN(dayValue)) {
                invalid[0].style.display = "none"
                errMessage[0].style.display = "inline"
            }
            if (isNaN(monthValue)) {
                invalid[1].style.display = "none"
                errMessage[1].style.display = "inline"
            }
            if (isNaN(yearValue)) {
                invalid[2].style.display = "none"
                errMessage[2].style.display = "inline"
            }
        } else if(isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue ||monthValue<1 ||monthValue> 12 || dayValue< 1 || dayValue > lastDayOfMonth || yearValue> currentDate.getFullYear() )) {

        }else {
            inputs.forEach(item=>{
                item.style.borderColor = "hsl(0, 0%, 94%)"
            })
            labels.forEach(item=> {
                item.style.color = "#716f6f"
            })
            
            invalid.forEach(item=> {
                item.style.display = "none"
            })
            errMessage.forEach(item=> {
                item.style.display = "none"
            })
            const userAge = currentDate - userDate
            const differenceInDays = Math.floor(userAge / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
            console.log(differenceInDays);
            console.log(userAge)
            console.log(userDate.getDate)

            /* Since there are a lot of variance in the calendar the logic is to convert everything
            to milliseconds and find the year diff. month diff. and day diff.
            The first logic get the total number of milliseconds from today's date and date inputed by user and get the 
            total numbet of milliseconds in a year we divided and get the total no. of year same logic is applied to month and days */
            const millisecondsInDay = 1000 * 60 * 60 * 24;
            const years = Math.floor(userAge / (millisecondsInDay * 365.25));
            const months = Math.floor((userAge % (millisecondsInDay * 365.25)) / (millisecondsInDay * 30.44));
            const days = Math.floor((userAge % (millisecondsInDay * 30.44)) / millisecondsInDay);


            spans[0].innerHTML = years
            spans[1].innerHTML = months
            spans[2].innerHTML =  days
        }
        
    }
    
  
})
