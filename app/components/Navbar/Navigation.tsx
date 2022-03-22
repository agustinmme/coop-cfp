import {ReactElement} from "react";
import {FaHome, FaFacebook, FaQuestionCircle} from "react-icons/fa";
export const Links = ["home", "questions"];

export const TITLES: Record<string, string> = {
  home: "inicio",
  questions: "preguntas frecuentes",
  social: "facebook",
};

export const ICONS: Record<string, ReactElement> = {
  home: <FaHome fontSize={20} />,
  questions: <FaQuestionCircle fontSize={20} />,
  social: <FaFacebook fontSize={20} />,
};
