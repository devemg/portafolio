import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormComponent } from "../../components/form/FormComponent";
import "./ContactPage.scss";
import contact from "../../data/contact.data";
import { useAnalytics } from "../../hooks/useAnalytics";
import { useEffect, useState } from "react";
import { contactFormFields, validateContactForm } from "./contactFields";

export const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);
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

  const sendSubmitEvent = (formData: any) => {
    setMessageSent(true);
    sendEvent('SubmitContactForm', formData);
    setTimeout(() => {
      setMessageSent(false);
    }, 1000);
  }
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
              onClick={() => {
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
            fields={contactFormFields}
            buttonText="Send Message"
            submitFormEvent={sendSubmitEvent}
            validateFunction={validateContactForm}
          ></FormComponent>
          {messageSent && <p>Message Sent!</p> } 
        </div>
      </div>
      <footer>&copy; 2023 - Emely Garcia - All rights reserved</footer>
    </div>
  );
};
