import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getFilenames } from "../functions";
import { site } from "../cms";

const setData = async (args: {
  directory: string;
  setState: Dispatch<SetStateAction<[] | undefined>>;
}) => {
  const { directory, setState } = args;
  const files = await getFilenames({ directory }).then((res) => {
    return res.json();
  });

  setState(files);
};

const getSiteSettings = (site: { [s: string]: any } | ArrayLike<any>) => {
  return Object.entries(site).map((entry, i) => {
    const value = entry[1];
    const label = entry[0];

    if (typeof value === "string") {
      return (
        <div className="flex justify-center" key={"site-setting" + i}>
          <div>{label}:</div> <div>{value}</div>
        </div>
      );
    } else {
      getSiteSettings(value);
    }
  });
};

const AdminDashboard = () => {
  const [images, setImages] = useState<[]>();
  const [galleries, setGalleries] = useState<[]>();

  useEffect(() => {
    setData({ directory: "/images/", setState: setImages });
    setData({ directory: "/images/galleries/", setState: setGalleries });
  }, []);

  return (
    <div className="admin-area outline">
      <h1>Admin Dashboard</h1>
      <section>
        <h2 className="h3">Site Settings</h2>
        <div>{getSiteSettings(site)}</div>
      </section>
      <section>
        <h2 className="h3">Images</h2>
        {images && (
          <div>
            <ul className="filename-list">
              {images.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section>
        <h2 className="h3">Galleries</h2>
        {galleries && (
          <div>
            <ul className="filename-list">
              {galleries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
