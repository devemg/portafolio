import { getAnalytics, logEvent } from "firebase/analytics";
import { EventName } from "../models/analytics/events";

export const useAnalytics = () => {
  const analytics = getAnalytics();

  const sendEvent = (eventName: EventName) => {
    console.log(`[GA4] send event ${eventName}`)
    logEvent(analytics, eventName);
  }

  return {
    sendEvent,
  };
}
