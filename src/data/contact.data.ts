import {
    faGithub,
    faGoogle,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ContactItem } from "@models/contact-item";

export const devemgContacts: ContactItem[] = [
    {
      id: 1,
      name: "LinkedIn",
      username: "Emely García",
      iconClass: "linkedin",
      icon: faLinkedin,
      link: "https://linkedin.com/in/emely-garciam",
    },
    {
      id: 2,
      name: "Email",
      username: "garciam.emm@gmail.com",
      iconClass: "google",
      icon: faGoogle,
      link: "mailto:garciam.emm@gmail.com?Subject=Hi Emely!",
    },
    {
      id: 3,
      name: "Github",
      username: "devemg",
      iconClass: "github",
      icon: faGithub,
      link: "https://github.com/devemg",
    },
    // {
    //   id: 4,
    //   name: "Gitlab",
    //   username: "devemg",
    //   iconClass: "gitlab",
    //   icon: faGitlab,
    //   link: "https://gitlab.com/devemg",
    // },
  ];
  
