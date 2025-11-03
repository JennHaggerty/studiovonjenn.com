import { galleries } from "@/app/cms";

interface Props {
  onClick?: (directory: string) => void;
}

const EventList = (props: Props) => {
  const { onClick } = props;

  return (
    <div>
      <h3>Events</h3>
      <ul>
        {galleries.map((gallery) => (
          <li key={gallery.directory}>
            {onClick ? (
              <button
                className="a"
                type="button"
                onClick={() => onClick(gallery.directory)}
              >
                {gallery.title}
              </button>
            ) : (
              gallery.title
            )}
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
