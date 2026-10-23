import ReactGA from "react-ga4";

const ID = "G-M0NW80RMMJ";
let ready = false;

export const initGA = () => {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
  ReactGA.initialize(ID);
  ready = true;
  ReactGA.send({ hitType: "pageview", page: location.pathname });
};

export const logEvent = (category, action) => {
  if (ready) ReactGA.event({ category, action });
};
