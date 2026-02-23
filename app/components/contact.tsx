import { settings } from "../site/site";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl!">Hey there,</h2>
      <p>
        Ready to make some art? Email me at{" "}
        <a href={`mailto:${settings.email}`}>{settings.email}</a>.
      </p>
      <p>
        Add me on <a href={settings.discord}>Discord</a> and I recently joined{" "}
        <a href={settings.instagram}>Instagram</a>, let's share art together!
      </p>
      <p>
        On the first Saturday of the month the photo-booth is posted in{" "}
        <a target="_blank" href="http://www.lcnaugusta.com/">
          Le Chat Noir
        </a>{" "}
        at 304 8th Street in Augusta Georgia, from 8:30pm — 12:00am for{" "}
        <a href="https://www.facebook.com/p/Atmosphere-Augusta-100088686398685/">
          Atmosphere
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
