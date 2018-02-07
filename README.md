# ETdate-iCalendar

<a href="https://en.wikipedia.org/wiki/Ethiopian_calendar">🇪🇹 Ethiopian date</a> integrated into your favorite calendar apps.

<a href="https://calendar.google.com/calendar/embed?src=h6o2n1lq92n8n8glj73698ptr82l8v6b%40import.calendar.google.com&ctz=Africa%2FNairobi"> Click here to checkout a public google calendar which uses the ETdate feed</a>.


Add the following the URL as calendar subscription to recieve the ETdate feed. (2015-2020)

> https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/etdate.ics

## Google calendar

<img src="https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/shots/1.png" width="400">


## Apple calendar
<img src="https://raw.githubusercontent.com/jixtes/etdate-iCalendar/master/shots/2.png" width="550">

### ⚠️ Precaution
- Avoid ‘importing’ the ics file to your primary calendar as it may be hard to remove once done - instead add the feed as shown on the screenshots above (yes there is a difference between importing and subscribing to a calendar feed using URL)
- Apple’s iCalendar may force a default alert notification which creates inconvenience so make sure to turnoff the alert when adding (you may also be required to manually turn off alert on an iPhone)


### etdate exporter [ics](https://en.wikipedia.org/wiki/ICalendar) 
To generate and export your own iCalendar file between a specific range of dates (from_date - to_date)

```npm install```

```node export.js yyyy-mm-dd(from_date)  to_date_yyyy-mm-dd(to_date)```

```node export.js [from yyyy-mm-dd] [to yyyy-mm-dd]
node export.js 2015-01-01 2021-01-01
```

### Acknowledgments
- [@utopiaio](https://github.com/utopiaio)
- [@zenysis](https://github.com/zenysis/ethiopian-date) - for the date converter 


