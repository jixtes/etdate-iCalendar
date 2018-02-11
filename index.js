/* eslint no-console: off */

const fs = require('fs');
const uuidv4 = require('uuid/v4');
const differenceInDays = require('date-fns/difference_in_days');
const addDays = require('date-fns/add_days');
const getDate = require('date-fns/get_date');
const getMonth = require('date-fns/get_month');
const getYear = require('date-fns/get_year');
const { ge } = require('ethiopic-calendar');
const geezer = require('geezer');

const ethiopicMonths = ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዚያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜን'];
const args = process.argv.slice(2);
const [endYear, endMonth, endDate] = args[1].split('-').map(i => Number.parseInt(i, 10));
const [startYear, startMonth, startDate] = args[0].split('-').map(i => Number.parseInt(i, 10));
const icsStartDate = new Date(startYear, (startMonth - 1), startDate);
// eslint-disable-next-line
const numberOfDays = differenceInDays(new Date(endYear, (endMonth - 1), endDate), new Date(startYear, (startMonth - 1), startDate));

// creating array according to `numberOfDays`
// TODO:
// find a better way to create an array
const ics = Array.from(new Array(numberOfDays + 1), (_, index) => {
  const indexDate = addDays(icsStartDate, index);
  const GCYear = getYear(indexDate);
  const GCMonth = getMonth(indexDate) + 1; // January === 1, December === 12 (JavaScript `Date` is 0 based on month)
  const GCDate = getDate(indexDate);

  // `GCMonth` and `GCDate` with preceding `0` to be used on `DTSTART`
  const GCMonth0 = GCMonth < 10 ? `0${GCMonth}` : `${GCMonth}`;
  const GCDate0 = GCDate < 10 ? `0${GCDate}` : `${GCDate}`;
  const { year, month, day } = ge(GCYear, GCMonth, GCDate);
  // to be used on third line of event on Ethiopic Year-Month-Day
  const month0 = month < 10 ? `0${month}` : month;
  const day0 = day < 10 ? `0${day}` : day;

  // used for `DTEND` as events are set to `all-day`
  const indexDatePlus1Day = addDays(indexDate, 1);
  const GCYearPlus1Day = getYear(indexDatePlus1Day);
  const GCMonthPlus1Day = getMonth(indexDatePlus1Day) + 1;
  const GCDatePlus1Day = getDate(indexDatePlus1Day);

  // `GCMonthPlus1Day` and `GCDatePlus1Day` with preceding `0` to be used on `DTEND`
  const GCMonthPlus1Day0 = GCMonthPlus1Day < 10 ? `0${GCMonthPlus1Day}` : GCMonthPlus1Day;
  const GCDatePlus1Day0 = GCDatePlus1Day < 10 ? `0${GCDatePlus1Day}` : GCDatePlus1Day;

  const alarmUUID = uuidv4();

  return `BEGIN:VEVENT
UID:${uuidv4()}
SUMMARY:${ethiopicMonths[month - 1]} ${day}, ${year}\\n${ethiopicMonths[month - 1]} ${geezer(day)}, ${geezer(year)}\\n${year}-${month0}-${day0}\\n${geezer(year)}-${geezer(month)}-${geezer(day)}
DTSTART;VALUE=DATE:${GCYear}${GCMonth0}${GCDate0}
DTEND;VALUE=DATE:${GCYearPlus1Day}${GCMonthPlus1Day0}${GCDatePlus1Day0}
DTSTAMP:${GCYear}${GCMonth0}${GCDate0}T000000Z
SEQUENCE:0
BEGIN:VALARM
X-WR-ALARMUID:${alarmUUID}
UID:${alarmUUID}
TRIGGER;VALUE=DATE-TIME:19760401T005545Z
ACTION:NONE
END:VALARM
END:VEVENT`;
});

fs.writeFile('ETDate.ics', `BEGIN:VCALENDAR
PRODID:-//JiXa//Ethiopian Date
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
NAME:ETDate
X-WR-CALNAME:ETDate
X-WR-TIMEZONE:Africa/Nairobi
SUMMARY:Ethiopian date iCalendar feed
DESCRIPTION:Ethiopian date iCalendar feed
X-WR-CALDESC:Ethiopian date as events
COLOR:255:255:255
${ics.join('\n')}
END:VCALENDAR`, (fsError) => {
  if (fsError) {
    throw fsError;
  }

  console.log('ETDate.ics file created');
});
