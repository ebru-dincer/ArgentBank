import { useDispatch, useSelector } from "react-redux";
import { setUserName, selectUser} from "../features/userSlice";
import { updateUser, userProfile } from "../api/api";
import { useState } from "react";

/**
 *
 * @returns {jsx} <Edit />
 */
function Edit({ openEdit, handleEdit }) {
  const userInfo = useSelector(selectUser);
  const [userNameInput, setUsernameInput] = useState("");
  const dispatch = useDispatch();
  // const { openEdit } = props;

  const userName = userInfo.user.userName

  const handleSave = (e) => {
    e.preventDefault();
    console.log("clic sur bouton save");
    handleEdit();

    dispatch(setUserName(userNameInput));
    console.log("Username Input is", userNameInput)

    const apiResp = updateUser(userNameInput)

  }

  return (
    <>
      {openEdit && (
        <>
          <h2>Edit user info</h2>
          <form>
            <div className="edit-input-wrapper">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                // value={user}
                placeholder={userName}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                value={userInfo.user.firstName}
                disabled={true}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                value={userInfo.user.lastName}
                disabled={true}
              />
            </div>
            <div className="edit-buttons">
              <button
                className="edit-button"
                  onClick={(e) => handleSave(e)}
              >
                Save
              </button>
              <button
                className="edit-button"
                onClick={() => handleEdit()}
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
