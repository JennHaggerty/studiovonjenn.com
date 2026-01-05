import { galleries } from "@/app/cms";
import Link from "next/link";

const EventList = () => {
  return (
    <div>
      <h3>Events</h3>
      <ul>
        {galleries.map((gallery) => (
          <li key={gallery.slug}>
            <Link href={`/gallery/${gallery.slug}`}>{gallery.title}</Link>
          </li>
        ))}
        <li>Hero's Con, Charlotte NC, 2018</li>
        <li>Steampunk World's Fair, Piscataway NJ, 2016</li>
        <li>Steampunk World's Fair, Piscataway NJ, 2015</li>
      </ul>
    </div>
  );
};

export default EventList;
