# ETDate-iCalendar

[🇪🇹 Ethiopian date](https://en.wikipedia.org/wiki/Ethiopian_calendar) integrated into your favorite calendar app

[Click here](https://calendar.google.com/calendar/embed?src=h6o2n1lq92n8n8glj73698ptr82l8v6b%40import.calendar.google.com&ctz=Africa%2FNairobi) to checkout a public Google calendar which uses the ETDate feed

Add the following the URL as calendar subscription to receive the ETdate feed from 2015 to 2020
`https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/etdate.ics`

## Google Calendar
![ETDate Google Calender](https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/screenshots/1.png "ETDate Google Calender")


## Apple Calendar
![ETDate Apple Calender](https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/screenshots/2.png "ETDate Apple Calender")

### ⚠️ Precaution
- Avoid `importing` the `.ics` file to your primary calendar as it may be hard to remove once done - instead add the feed as shown on the screenshots above
- Apple's iCalendar may force a default alert notification which creates inconvenience so make sure to turn-off the alert when adding


### ETDate exporter [ics](https://en.wikipedia.org/wiki/ICalendar)
To generate and export your own iCalendar file between a specific range of dates
```bash
$ node index.js yyyy-mm-dd yyyy-dd-mm
```

### Acknowledgments
- [@utopiaio](https://github.com/utopiaio)
