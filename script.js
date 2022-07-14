
var today = new Date();
var date=new Date("2022-05-29T13:00:00");
function calcDate(date1,date2) {
    var diff=Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    return days;
}
var a = calcDate(today,date);
//document.write(a);
document.body.getElementById('day').innerHTML=document.write(a) ;
