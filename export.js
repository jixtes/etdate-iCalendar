const fs = require('fs')
const header = 'BEGIN:VCALENDAR'+
    '\r\nPRODID:-//JiXa//Ethiopian Date'+
    '\r\nVERSION:2.0'+
    '\r\nCALSCALE:GREGORIAN'+
    '\r\nMETHOD:PUBLISH'+
    '\r\nNAME:ETdate'+
    '\r\nX-WR-CALNAME:ETdate'+
    '\r\nX-WR-TIMEZONE:Africa/Nairobi'+
    '\r\nSUMMARY:Ethiopian date iCalendar feed'+
    '\r\nDESCRIPTION:Ethiopian date iCalendar feed'+
    '\r\nX-WR-CALDESC:Ethiopian date as events'+
    '\r\nCOLOR:255:255:255';

fs.writeFile('etdate.ics',header, function (err) {
  if (err) throw err;
  console.log('etdate.ics file created');
});

var et = require('ethiopian-date');
var args = process.argv.slice(2);
var date1 = new Date(args[0]);
var date2 = new Date(args[1]);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var number_of_days = Math.ceil(timeDiff / (1000 * 3600 * 24));

if (number_of_days < 1)
 throw new Error({'Invalid Dates':'Number of days below 1'});

for (var i = 0; i <= number_of_days; i++) {
  var months = ["መስከረም","ጥቅምት","ኅዳር","ታኅሣሥ","ጥር","የካቲት","መጋቢት","ሚያዚያ","ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","ጳጉሜን"]
  var gregorian = [date1.getUTCFullYear(),("0"+(date1.getUTCMonth()+1)).slice(-2),("0" + date1.getUTCDate()).slice(-2)];
  var content;
  var ethiopian;
  var title;

  content = '\r\nBEGIN:VEVENT'
  content += '\r\nDTSTART;VALUE=DATE:'+gregorian[0]+gregorian[1]+gregorian[2]
  content += '\r\nDTSTAMP:'+gregorian[0]+'0125T115712Z'
  content += `\r\nSEQUENCE:0\r\nSTATUS:CONFIRMED`

  // remove possibility of preceeding 0s for month and date
  gregorian[1] = date1.getUTCMonth()+1
  gregorian[2] = date1.getUTCDate()

  ethiopian = et.toEthiopian(gregorian)
  title = months[ethiopian[1]-1]+" "+ethiopian[2]

  console.log(title, gregorian[0]+'-'+gregorian[1]+'-'+gregorian[2])

  content += '\r\nSUMMARY:'+title+
  '\r\nTRANSP:TRANSPARENT'+
  '\r\nBEGIN:VALARM'+
  '\r\nX-WR-ALARMUID:11AEB7C8-8A2C-4F48-A5B2-0B122007023F'+
  '\r\nUID:11AEB7C8-8A2C-4F48-A5B2-0B122007023F'+
  '\r\nTRIGGER;VALUE=DATE-TIME:19760401T000000Z'+
  '\r\nACTION:NONE'+
  '\r\nEND:VALARM'+
  '\r\nEND:VEVENT';

  fs.appendFile('etdate.ics',content, function (err) {
    if (err) throw err;
  });

  date1.setDate(date1.getDate()+1)
}
fs.appendFile('etdate.ics','\r\nEND:VCALENDAR', function (err) {
  if (err) throw err;
});
