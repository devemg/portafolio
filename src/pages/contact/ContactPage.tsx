import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactItem } from "../../models/contact-item";
import "./ContactPage.scss";
import {
  faLinkedin,
  faGoogle,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { FormComponent } from "../../components/form/FormComponent";
import { FormField } from "../../components/form/FormComponent";

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

const formFields: FormField[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Your Email",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
  },
];

export const ContactPage = () => {
  return (
    <div className="contact">
      <h2>Let's get in touch </h2>
      <div className="contact-data">
        <div className="contact-data-info">
          {contact.map((item) => (
            <a
              key={item.id}
              className={["contact-data-info-item", item.iconClass].join(" ")}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onClick={(ev) => {
                if (item.id === 2) ev.preventDefault();
                navigator.clipboard.writeText(item.link);
              }}
            >
              <FontAwesomeIcon size="3x" icon={item.icon} />
              <div className="contact-data-info-item-desc">
                <div className="contact-data-info-item-title">
                  {item.social}
                </div>
                <div className="contact-data-info-item-username">
                  {item.username}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="contact-data-form-container">
          <p>I will be happy to read your message!</p>
          <FormComponent
            fields={formFields}
            buttonText="Send Message"
          ></FormComponent>
        </div>
      </div>
    </div>
  );
};
