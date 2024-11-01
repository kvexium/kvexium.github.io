import {
  FaWindows,
  FaLinux,
  FaApple,
  FaFire,
  FaLightbulb,
  FaCircleInfo,
  FaTriangleExclamation,
  FaNoteSticky,
  FaQuoteLeft,
} from "react-icons/fa6";

const admonitionConfig = {
  win: {
    color: "#197278",
    icon: FaWindows,
  },
  linux: {
    color: "#F2A65A",
    icon: FaLinux,
  },
  mac: {
    color: "#84A98C",
    icon: FaApple,
  },
  tip: {
    color: "#B7B7A4",
    icon: FaLightbulb,
  },
  danger: {
    color: "#C44536", //"#CE796B",
    icon: FaFire,
  },
  note: {
    color: "#DDBEA9",
    icon: FaNoteSticky,
  },
  warning: {
    color: "#C18C5D",
    icon: FaTriangleExclamation,
  },
  info: {
    color: "#495867",
    icon: FaCircleInfo,
  },
  quote: {
    color: "#6B705C",
    icon: FaQuoteLeft,
  },
};

export default admonitionConfig;
