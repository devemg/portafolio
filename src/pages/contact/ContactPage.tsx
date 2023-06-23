import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormComponent, FormField } from "../../components/form/FormComponent";
import "./ContactPage.scss";
import contact from "../../data/contact.data";
import { useAnalytics } from "../../hooks/useAnalytics";
import { useEffect } from "react";

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
  const { sendEvent } = useAnalytics();
  useEffect(() => {
    sendEvent("ViewContact");
  }, []);

  const sendClickEvent = (social: string) => {
    switch (social) {
      case "LinkedIn":
        sendEvent("ClickLinkedin");
        break;
      case "Email":
        sendEvent("ClickEmail");
        break;
      case "Github":
        sendEvent("ClickGithub");
        break;
      case "Gitlab":
        sendEvent("ClickGitlab");
        break;
    }
  };
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
                sendClickEvent(item.social);
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
