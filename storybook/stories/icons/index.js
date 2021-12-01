import React from 'react'

import BackArrow from "./BackArrow";
import Box from "./Box";
import Calendar from "./Calendar";
import Check from "./Check";
import CheckCircle from "./CheckCircle";
import CloseX from "./CloseX";
import CrossCircle from "./CrossCircle";
import Dot from "./Dot";
import DownArrow from "./DownArrow";
import EyeClosed from "./EyeClosed";
import EyeOpen from "./EyeOpen";
import Hamburger from "./Hamburger";
import Happy from "./Happy";
import Home from "./Home";
import LeftArrow from "./LeftArrow";
import Lifter from "./Lifter";
import Loading from "./Loading";
import Location from "./Location";
import Logout from "./Logout";
import Money from "./Money";
import Phone from "./Phone";
import RightArrow from "./RightArrow";
import Sad from "./Sad";
import Settings from "./Settings";
import Time from "./Time";
import Truck from "./Truck";
import UpArrow from "./UpArrow";
import User from "./User";

// When adding more icons from an svg use this website
// to format the svg properly
// https://react-svgr.com/playground/?native=true

export default icons = (props) => ({
  backArrow: <BackArrow {...props} />,
  box: <Box {...props} />,
  calendar: <Calendar {...props} />,
  check: <Check {...props} />,
  checkCircle: <CheckCircle {...props} />,
  closeX: <CloseX {...props} />,
  crossCircle: <CrossCircle {...props} />,
  dot: <Dot {...props} />,
  downArrow: <DownArrow {...props} />,
  eyeClosed: <EyeClosed {...props} />,
  eyeOpen: <EyeOpen {...props} />,
  hamburger: <Hamburger {...props} />,
  happy: <Happy {...props} />,
  home: <Home {...props} />,
  leftArrow: <LeftArrow {...props} />,
  lifter: <Lifter {...props} />,
  loading: <Loading {...props} />,
  location: <Location {...props} />,
  logout: <Logout {...props} />,
  money: <Money {...props} />,
  phone: <Phone {...props} />,
  rightArrow: <RightArrow {...props} />,
  sad: <Sad {...props} />,
  settings: <Settings {...props} />,
  time: <Time {...props} />,
  truck: <Truck {...props} />,
  upArrow: <UpArrow {...props} />,
  user: <User {...props} />,
})