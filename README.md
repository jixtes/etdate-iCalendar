# 🇪🇹 ETDate-iCalendar

[Ethiopian Date](https://en.wikipedia.org/wiki/Ethiopian_calendar) integrated into your favorite calendar app

ETDate feed `2018 - 2021`
> [https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/etdate.ics](https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/etdate.ics)

## Google Calendar
> [https://calendar.google.com/calendar/embed?src=h6o2n1lq92n8n8glj73698ptr82l8v6b%40import.calendar.google.com&ctz=Africa%2FNairobi](https://calendar.google.com/calendar/embed?src=h6o2n1lq92n8n8glj73698ptr82l8v6b%40import.calendar.google.com&ctz=Africa%2FNairobi)

![ETDate Google Calender](https://raw.githubusercontent.com/utopiaio/etdate-iCalendar/uDev/screenshots/1.png "ETDate Google Calender")

## Apple Calendar
![ETDate Apple Calender](https://raw.githubusercontent.com/utopiaio/etdate-iCalendar/uDev/screenshots/2.png "ETDate Apple Calender")

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
