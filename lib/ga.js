// src/ga.js
import ReactGA from "react-ga4";
const GA_TRACKING_ID =
  process.env.NEXT_NODE_ENV === "development"
    ? "G-XXXXXXXXXX"
    : process.env.NEXT_PUBLIC_GA;
console.log("🚀 ~ GA_TRACKING_ID:", GA_TRACKING_ID);

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category = "", action = "", label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
