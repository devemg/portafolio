import { getAnalytics, logEvent } from "firebase/analytics";
import { EventName } from "../models/analytics/events";

export const useAnalytics = () => {
  const analytics = getAnalytics();

  const sendEvent = (eventName: EventName, attributes?: any) => {
    // console.log(`[GA4] send event ${eventName}`, attributes);
    logEvent(analytics, eventName, attributes);
  }

  return {
    sendEvent,
  };
}
