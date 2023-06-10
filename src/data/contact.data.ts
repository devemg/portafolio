import {
    faGithub,
    faGitlab,
    faGoogle,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ContactItem } from "../models/contact-item";

const contact: ContactItem[] = [
    {
      id: 1,
      social: "LinkedIn",
      username: "Emely García",
      iconClass: "linkedin",
      icon: faLinkedin,
      link: "https://linkedin.com/in/emely-garciam",
    },
    {
      id: 2,
      social: "Email",
      username: "garciam.emm@gmail.com",
      iconClass: "google",
      icon: faGoogle,
      link: "garciam.emm@gmail.com",
    },
    {
      id: 3,
      social: "Github",
      username: "devemg",
      iconClass: "github",
      icon: faGithub,
      link: "https://github.com/devemg",
    },
    {
      id: 4,
      social: "Gitlab",
      username: "devemg",
      iconClass: "gitlab",
      icon: faGitlab,
      link: "https://gitlab.com/devemg",
    },
  ];
  

  export default contact;