import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormComponent, FormField } from "../../components/form/FormComponent";
import "./ContactPage.scss";
import contact from "../../data/contact.data";

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
