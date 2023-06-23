import { rest } from "msw";
import { store } from "./store";
import { Event } from '../services/api/events'

export const handlers = [
  rest.post("/event", async (req, res, ctx) => {
    const eventData = await req.json();
    const newEvent: Event = { id: Math.random().toString(16).slice(2), ...eventData };

    const events: Event[] = [...store.get("events"), newEvent];
    store.set("events", events);

    return res(ctx.status(200), ctx.json({ event: newEvent }));
  }),

  rest.get("/events", (req, res, ctx) => {
    const params = new URLSearchParams(req.url.search);
    const searchTerm = params.get("s");
    const events = store.get("events");
    const filteredEvents = events.filter((event: Event) => {
      return event.title.includes(searchTerm) || event.description.includes(searchTerm)
    });
    //console.log(searchTerm, filteredEvents);

    return res(ctx.status(200), ctx.json({ events }));
  }),
];
