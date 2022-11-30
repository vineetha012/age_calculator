// const date1=document.querySelector('date')
// const result=document.getElementById('result')

// date1.addEventListener('change',(e)=>{
//     let target=e.target
//     console.log(e.target.value)
// })
// function datefunction(value){
//     console.log(value)
// }
function onsubmiting(){
    var birthdate=document.getElementById("date").value
    // console.log(birthdate)
    var birthmonth=document.getElementById('month').value
    var birthyear=document.getElementById('year').value
    //console.log(birthdate,birthmonth,birthyear)
    var Current_date=new Date()//month miniutes like that
    console.log(Current_date.getMonth())
    var currentDate=Current_date.getDate()
   var currentMonth=Current_date.getMonth()
   var currentYear=Current_date.getFullYear()
    console.log(currentDate,currentMonth,currentYear)
    const month=[31,28,31,30,31,30,31,31,30,31,30,31]
    //console.log(month.length);
    if(birthdate>currentDate){
        currentDate=currentDate+month[currentMonth-1]
        currentMonth=currentMonth-1
    }
    
    if(birthmonth>currentMonth){
        currentMonth=currentMonth+12
        currentYear=currentYear-1
    }
    let  diff_days=currentDate-birthdate;
    let diff_month=currentMonth-birthmonth;
    let diff_year=currentYear-birthyear
    var result=document.getElementById('result')
    result.innerText=`Your Age is ${diff_year} Years ${diff_month} Months ${diff_days} Days`
    birthdate=""
    birthmonth=""
    birthyear=""
    console.log( birthdate);
}