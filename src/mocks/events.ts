type DateString = string;

enum EventType {
  GENERIC = 'generic',
  HOLIDAY = 'holiday',
}

type Event = {
  id: string;
  title: string;
  type: string;
  startDate: DateString;
  endDate: DateString;
  description: string;
}

export const events: Event[] = [
  {
    "id": "1",
    "title": "Start of the year",
    "type": "generic",
    "startDate": "2022-01-01", //format in YYYY-MM-DD
    "endDate": "2022-12-01", //format in YYYY-MM-DD
    "description": "This is an event about the start of this year"
  },
  {
    "id": "2",
    "title": "Easter",
    "type": "holiday",
    "startDate": "2022-04-04", //format in YYYY-MM-DD
    "endDate": "2022-04-05", //format in YYYY-MM-DD
    "description": "Celebrating A Bunny"
  },
  {
    "id": "3",
    "title": "May 4th",
    "type": "holiday",
    "startDate": "2022-05-04", //format in YYYY-MM-DD
    "endDate": "2022-05-05", //format in YYYY-MM-DD
    "description": "Celebrating A Movie"
  },
]