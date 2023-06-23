import { rest } from "msw";
import { store } from "./store";

export const handlers = [
  rest.post("/event", async (req, res, ctx) => {
    const event = await req.json();
    const newEvent = { id: Math.random().toString(16).slice(2), ...event };
    const events = [...store.get("events"), newEvent];
    store.set("events", events);

    return res(ctx.status(200), ctx.json({ event }));
  }),

  rest.get("/events", (req, res, ctx) => {
    const params = new URLSearchParams(req.url);
    const searchTerm = params.get("s");

    const events = store.get("events");
    return res(ctx.status(200), ctx.json({ events }));
  }),
];
