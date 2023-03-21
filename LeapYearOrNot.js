function checkYear(year){

        return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
    }
    var year = 2000;
    console.log(checkYear(2000) ? "Leap Year" : "Not a Leap Year");
 