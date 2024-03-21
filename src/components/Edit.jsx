import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

/**
 *
 * @returns {jsx} <Edit />
 */
function Edit(props) {
  const username = useSelector(selectUser);
  const { open } = props;

  return (
    <>
      {open && (
        <>
          <h2>Edit user info</h2>
          <form>
            <div className="edit-input-wrapper">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={username}
                // onChange={}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                // value={firstname}
                disabled={true}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                // value={firstname}
                disabled={true}
              />
            </div>
            <div className="edit-buttons">
              <button
                className="edit-button"
                //   onClick={}
              >
                Save
              </button>
              <button
                className="edit-button"
                // onClick={}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Edit;
