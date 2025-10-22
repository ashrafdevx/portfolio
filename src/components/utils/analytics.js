import ReactGA from "react-ga4";

export const GA_MEASUREMENT_ID = "G-VHDPWMB7LY";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const sendPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const sendEvent = (action, category, label) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
