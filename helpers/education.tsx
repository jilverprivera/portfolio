import { SiJest, SiReact } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

const EDUCATION = [
  {
    academy: "Universidad de Investigación y Desarrollo",
    title: "Electronic Engineer.",
    location: "Bucaramanga, CO.",
    date: "Feb 2017 - Current",
    data: "I'm specialized in industrial Automation, Control systems and Robotics.",
    url: "#",
    icon: <FaUniversity />,
  },
  {
    academy: "UDEMY",
    title: "React Native Certification.",
    location: "Online",
    date: "Mar 2022",
    data: "Learn the React Native components and mobile interactions with TypeScript.",
    url: "https://www.udemy.com/certificate/UC-d0b0e3e8-06b7-490f-ab49-7b0a6d613f02/",
    icon: <SiReact />,
  },
  {
    academy: "UDEMY",
    title: "React - Jest Certification.",
    location: "Online.",
    date: "2021",
    data: "Learn the React basics and apply jest for testing.",
    url: "#",
    icon: <SiJest />,
  },
  {
    academy: "UDEMY",
    title: "MERN Stack - Redux Certification.",
    location: "Online.",
    date: "2021",
    data: "Understand the MERN Stack with Redux context.",
    url: "#",
    icon: <SiReact />,
  },
];
export default EDUCATION;
