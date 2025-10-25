import { useEffect, useState } from "react";
import { deleteFile, getAllFiles } from "../functions";
import { siteSettings } from "../cms";
import Loading from "./loading";
import FolderIcon from "./svgs/folderIcon";

interface File {
  name: string;
  extension?: string;
  isDirectory?: boolean;
}

const AdminDashboard = () => {
  const [files, setFiles] = useState<File[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>();
  const [siteSettingsData, setSiteSettingsData] = useState(siteSettings);
  const [listView, setListView] = useState<string>("list");
  const [editFiles, setEditFiles] = useState<boolean>(false);

  const imagesDirectory = "/images/";

  const getAll = async () => {
    const cmsFiles = await getAllFiles({ directory: imagesDirectory })
      .then((res) => res)
      .catch((e) => console.log(e));

    setFiles(cmsFiles);
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

  const handleDelete = async (args: { id: string }) => {
    const { id } = args;
    const fullImagePath = imagesDirectory + id;

    setLoading(true);

    await deleteFile({ fullImagePath })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));

    getAll();

    setLoading(false);
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

  const renderDeleteButton = (arg: { id: string }) => {
    const { id } = arg;
    return (
      <button
        onClick={() => handleDelete({ id })}
        className="primary w-half center"
      >
        Delete
      </button>
    );
  };

  const renderShowFormButton = () => (
    <button type="button" onClick={() => setShowForm(!showForm)}>
      Edit
    </button>
  );

  const renderViewButtons = () => (
    <div className="flex justify-end gap-1">
      {listView === "list" ? (
        <button type="button" onClick={() => setListView("grid")}>
          Grid View
        </button>
      ) : (
        <button type="button" onClick={() => setListView("list")}>
          List View
        </button>
      )}
      <button type="button">Add</button>
      <button type="button" onClick={() => setEditFiles(!editFiles)}>
        Edit
      </button>
    </div>
  );

  const renderFileList = () => {
    if (!files) return;

    return (
      <ul className="filename-list">
        {files.map((item, i) =>
          item.isDirectory ? (
            <li key={`directory-${i}`} className="w-full flex-between">
              <a href={`/public/${item.name}`} className="break-word uppercase">
                {item.name}
              </a>
            </li>
          ) : (
            <li key={`image-${i}`} className="w-full flex-between">
              <a href={`/images/${item.name}`} className="break-word w-full">
                {item.name}
              </a>
              {editFiles &&
                renderDeleteButton &&
                renderDeleteButton({ id: item.name })}
            </li>
          ),
        )}
      </ul>
    );
  };

  const renderFileGrid = () => {
    if (!files) return;

    return (
      <ul className="filename-grid">
        {files.map((item, i) =>
          item.isDirectory ? (
            <li key={`directory-${i}`}>
              <a
                href={`/public/${item}`}
                className="break-word flex-col center"
              >
                <FolderIcon />
                {item.name}
              </a>
            </li>
          ) : (
            <li className="border" key={`image-${i}`}>
              <img src={`/images/${item.name}`} />
              <div className="flex-col gap-1">
                <p className="center">{item.name}</p>
                {editFiles &&
                  renderDeleteButton &&
                  renderDeleteButton({ id: item.name })}
              </div>
            </li>
          ),
        )}
      </ul>
    );
  };

  return (
    <div className="main admin-area ">
      <h1>Admin Dashboard</h1>
      <div className="admin-settings">
        <section className="border">
          <div className="flex-between">
            <h2 className="h3">Site Settings</h2>
            {showForm ? renderFormButtons() : renderShowFormButton()}
          </div>
          {showForm ? editSiteSettings() : showSiteSettings(siteSettingsData)}
          {showForm && renderFormButtons()}
        </section>
        <section className="border">
          <div className="flex-between">
            <h2 className="h3">Files</h2>
            <div className="flex justify-end gap-1">{renderViewButtons()}</div>
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
