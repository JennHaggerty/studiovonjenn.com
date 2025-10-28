import { FormEvent, useEffect, useState } from "react";
import { deleteFile, deleteFolder, getAllFiles } from "../functions";
import { siteSettings } from "../cms";
import Loading from "./loading";
import FolderIcon from "./svgs/folderIcon";
import { File } from "../interfaces";

const imagesDirectory = "/images/";

const AdminDashboard = () => {
  const [files, setFiles] = useState<File[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>();
  const [siteSettingsData, setSiteSettingsData] = useState(siteSettings);
  const [listView, setListView] = useState<string>("list");
  const [editFiles, setEditFiles] = useState<boolean>(false);
  // TODO: move directory/file/folder actions/info to context
  const [currentDirectory, setCurrentDirectory] = useState<string>();

  const getAll = async () => {
    const cmsFiles = await getAllFiles({ directory: imagesDirectory })
      .then((res) => res)
      .catch((e) => console.log(e));

    setFiles(cmsFiles);
  };

  useEffect(function getImagesOnLoad() {
    getAll();
    setCurrentDirectory(imagesDirectory);
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

  const handleDelete = async (args: { item: File }) => {
    const { item } = args;
    console.log(item);
    const fullImagePath = imagesDirectory + item.name;

    setLoading(true);

    if (item.isDirectory) {
      await deleteFolder({ fullPath: fullImagePath });
    } else {
      await deleteFile({ fullImagePath });
    }

    getAll();

    setLoading(false);
  };

  const handleAddFolder = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const body = JSON.stringify(data);

    await fetch("./api/files/createDirectory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then(async (res) => {
        if (res.status != 201) {
          return console.log("Could not make folder.");
        }
        return getAll();
      })
      .catch((e) => console.log(e));

    return setLoading(false);
  };

  const renderAddFilesForms = () => {
    return (
      <div className="outline flex flex-col gap-1">
        <h3>Add files and folders</h3>
        <form id="add-folder" className="p-1 dotted" onSubmit={handleAddFolder}>
          <input
            type="text"
            id="directory"
            name="directory"
            defaultValue={currentDirectory}
            //className="hidden"
          />
          <input
            type="text"
            id="name"
            name="name"
            className="border w-full"
            placeholder="Folder name"
            aria-label="New folder name"
          />
          <button type="submit" className="w-full">
            Add folder
          </button>
        </form>
        <div className="">
          <button
            onClick={() => console.log("add file")}
            id="add-file"
            className="w-full"
          >
            Add file
          </button>
        </div>
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

  const renderDeleteFileButton = (arg: { item: File }) => {
    const { item } = arg;
    return (
      <>
        {item.isDirectory && item.name === "galleries" ? (
          ""
        ) : (
          <button
            onClick={() => handleDelete({ item })}
            className="primary w-1/2 center"
          >
            Delete
          </button>
        )}
      </>
    );
  };

  const renderShowFormButton = () => (
    <button type="button" onClick={() => setShowForm(!showForm)}>
      Edit
    </button>
  );

  const renderFileSectionButtons = () => (
    <div className="flex-1 flex-col">
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
        <button type="button" onClick={() => setEditFiles(!editFiles)}>
          Edit
        </button>
      </div>
    </div>
  );

  const renderFileList = () => {
    if (!files) return;

    return (
      <ul className="filename-list">
        {files.map((item, i) => (
          <li key={`file-${i}`} className="w-full flex-between">
            <a
              href={`/public/${item.name}`}
              className={`break-word ${item.isDirectory ? "uppercase" : ""}`}
            >
              {item.name}
            </a>
            {editFiles && renderDeleteFileButton({ item })}
          </li>
        ))}
      </ul>
    );
  };

  const renderFileGrid = () => {
    if (!files) return;

    return (
      <ul className="filename-grid">
        {files.map((item, i) => (
          <li className="border" key={`image-${i}`}>
            {item.isDirectory ? (
              <FolderIcon />
            ) : (
              <img src={`/images/${item.name}`} />
            )}
            <div className="flex-col gap-1">
              <p className="center">{item.name}</p>
              {editFiles && renderDeleteFileButton({ item })}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="main admin-area ">
      <h1 className="p-3">Admin Dashboard</h1>
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
            {renderFileSectionButtons()}
          </div>
          {editFiles && renderAddFilesForms()}
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
