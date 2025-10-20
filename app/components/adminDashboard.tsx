import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getFiles } from "../functions";
import { siteSettings } from "../cms";
import Loading from "./loading";

const setData = async (args: {
  directory: string;
  setState: Dispatch<SetStateAction<[] | undefined>>;
}) => {
  const { directory, setState } = args;
  const files = await getFiles({ directory }).then((res) => {
    return res.json();
  });

  setState(files);
};

const AdminDashboard = () => {
  const [images, setImages] = useState<[]>();
  const [galleries, setGalleries] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>();

  useEffect(() => {
    setData({ directory: "/images/", setState: setImages });
    setData({ directory: "/images/galleries/", setState: setGalleries });
    setLoading(false);
  }, []);

  const showSiteSettings = (site: { [s: string]: any } | ArrayLike<any>) => {
    return Object.entries(site).map((entry, i) => {
      const value = entry[1];
      const label = entry[0];

      if (typeof value === "string") {
        return (
          <div className="site-setting-row" key={"site-setting" + i}>
            <div>{label}:</div> <div>{value}</div>
          </div>
        );
      } else {
        showSiteSettings(value);
      }
    });
  };
  const editSiteSettings = () => {
    return (
      <div aria-hidden={!showForm}>
        <form>
          {Object.entries(siteSettings).map((setting, i) => {
            const id = setting[0];
            const defaultValue = setting[1];
            const label = id;

            return (
              <div className="site-setting-row" key={"site-setting" + i}>
                <label htmlFor={id}>{label}</label>
                <input
                  id={id}
                  aria-label={label}
                  defaultValue={defaultValue}
                  type="string"
                  autoComplete="off"
                />
              </div>
            );
          })}
        </form>
      </div>
    );
  };

  return (
    <div className="main admin-area">
      <h1>Admin Dashboard</h1>
      <div className="admin-settings">
        <section className="outline">
          {showForm ? (
            <>
              <div className="flex-between">
                <h2 className="h3">Site Settings</h2>
                <div className="flex gap-1">
                  <button
                    className="primary"
                    type="button"
                    onClick={() => setShowForm(!showForm)}
                  >
                    Cancel
                  </button>
                  <button type="button" onClick={() => setShowForm(!showForm)}>
                    Save
                  </button>
                </div>
              </div>
              <div>{editSiteSettings()}</div>
              <div className="flex gap-1 justify-end">
                <button
                  className="primary"
                  type="button"
                  onClick={() => setShowForm(!showForm)}
                >
                  Cancel
                </button>
                <button type="button" onClick={() => setShowForm(!showForm)}>
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex-between">
                <h2 className="h3">Site Settings</h2>
                <button type="button" onClick={() => setShowForm(!showForm)}>
                  Edit
                </button>
              </div>
              <div>{showSiteSettings(siteSettings)}</div>
            </>
          )}
        </section>
        <section className="outline">
          <h2 className="h3">Images</h2>
          {loading ? (
            <Loading />
          ) : (
            images && (
              <div>
                <ul className="filename-list">
                  {images.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>
        <section className="outline">
          <h2 className="h3">Galleries</h2>
          {loading ? (
            <Loading />
          ) : (
            galleries && (
              <div>
                <ul className="filename-list">
                  {galleries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
