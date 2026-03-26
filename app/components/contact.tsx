import { settings } from "../site/site";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Email me at <a href={`mailto:${settings.email}`}>{settings.email}</a>{" "}
        with questions and to schedule your portrait session.
      </p>
    </div>
  );
};

export default Contact;
