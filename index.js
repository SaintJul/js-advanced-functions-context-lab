/* Your Code Here */
function createEmployeeRecord(arry){
    return {
    firstName :arry[0],
    familyName : arry[1],
    title : arry[2], 
    payPerHour: arry[3],
    timeInEvents: [],
    timeOutEvents: []}
}

function createEmployeeRecords(altArry){
    return (altArry.map(ar => createEmployeeRecord(ar)))
}

function createTimeInEvent(time){    
    const [date, hours] = time.split(" ")
    
    //console.log(day, hours)


    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hours, 10),
        date
    })
    return this
    //console.log(day)
    //console.log(hours)
      
}

function createTimeOutEvent(time){    
    const [date, hours] = time.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hours, 10),
        date
    })
     return this
}

function hoursWorkedOnDate(dateWorked){
   // console.log(dateWorked)
     const inTime = this.timeInEvents.find(t => t.date === dateWorked)
    const outTime = this.timeOutEvents.find(t => t.date === dateWorked)

    return ((outTime.hour - inTime.hour)/100)

    
}

function wagesEarnedOnDate(date){ 
    const wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wages.toString())
}


function findEmployeeByFirstName(arry, firstName){  
   return arry.find(rec => rec.firstName === firstName
    )
}

function calculatePayroll(records){
   return records.reduce((memo, rec) => memo + allWagesFor(rec), 0)    
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}