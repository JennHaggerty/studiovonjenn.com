import { useEffect, useState } from "react";
import { getAllFiles } from "../functions";
import { siteSettings } from "../cms";
import Loading from "./loading";
import FolderIcon from "./svgs/folderIcon";

interface AllFiles {
  folders?: string[];
  files?: string[];
}

const AdminDashboard = () => {
  const [files, setFiles] = useState<AllFiles>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>();
  const [siteSettingsData, setSiteSettingsData] = useState(siteSettings);
  const [listView, setListView] = useState<string>("grid");

  const imagesDirectory = "/images/";

  const getAll = async () => {
    const files = await getAllFiles({ directory: imagesDirectory }).then(
      (data) => {
        return data;
      },
    );
    setFiles(files);
  };

  useEffect(function getImagesOnLoad() {
    getAll();
    setLoading(false);
  }, []);

  const showSiteSettings = (site: { [s: string]: any } | ArrayLike<any>) => {
    return Object.entries(site).map((entry, i) => {
      const value = entry[1];
      const label = entry[0];

      if (typeof value === "string") {
        return (
          <div className="site-setting-row" key={"site-setting" + i}>
            <div className="label">{label}:</div>{" "}
            <div className="break">{value}</div>
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
          {Object.entries(siteSettingsData).map((setting, i) => {
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

  const renderFormButtons = () => {
    return (
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
    );
  };

  const renderFileList = () => {
    return (
      files && (
        <>
          {files.folders && (
            <div>
              <h2 className="h3">Folders</h2>
              <ul className="filename-list">
                {files.folders.map((item, i) => (
                  <li key={`directory-${i}`}>
                    <a href={`/public/${item}`} className="break-word">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {files.files && (
            <div>
              <h2 className="h3">Files</h2>
              <ul className="filename-list">
                {files.files.map((item, i) => (
                  <li key={`image-${i}`}>
                    <a href={`/images/${item}`} className="break-word">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )
    );
  };

  const renderFileGrid = () => {
    return (
      files && (
        <>
          {files?.folders && (
            <div>
              <h2 className="h3">Folders</h2>
              <ul className="filename-grid">
                {files.folders.map((item, i) => (
                  <li key={`directory-${i}`}>
                    <a
                      href={`/public/${item}`}
                      className="break-word flex-col center"
                    >
                      <FolderIcon />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {files.files && (
            <div>
              <h2 className="h3">Images</h2>
              <ul className="filename-grid">
                {files.files.map((item, i) => (
                  <li key={`image-${i}`}>
                    <img src={`/images/${item}`} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )
    );
  };

  return (
    <div className="main admin-area ">
      <h1>Admin Dashboard</h1>
      <div className="admin-settings">
        <section className="border">
          <div className="flex-between">
            <h2 className="h3">Site Settings</h2>
            {showForm ? (
              renderFormButtons()
            ) : (
              <button type="button" onClick={() => setShowForm(!showForm)}>
                Edit
              </button>
            )}
          </div>
          {showForm ? editSiteSettings() : showSiteSettings(siteSettingsData)}
          {showForm && renderFormButtons()}
        </section>
        <section className="border">
          <div className="flex-between">
            <p className="note">
              Your files in the `/public/images/` directory
            </p>
            <div className="flex justify-end gap-1">
              {listView === "list" ? (
                <button type="button" onClick={() => setListView("grid")}>
                  Thumbnails
                </button>
              ) : (
                <button type="button" onClick={() => setListView("list")}>
                  Filenames
                </button>
              )}
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : listView === "list" ? (
            renderFileList()
          ) : (
            renderFileGrid()
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
