import { useDispatch, useSelector } from "react-redux";
import { setUserName, selectUser } from "../features/userSlice";
import { updateUser, userProfile } from "../api/api";
import { useState } from "react";

/**
 * This component renders the Edit section.
 * @param {boolean} openEdit 
 * @param {function} handleEdit 
 * @returns {jsx} <Edit />
 */
function Edit({ openEdit, handleEdit }) {
  const userInfo = useSelector(selectUser);
  const [userNameInput, setUsernameInput] = useState("");
  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();
    handleEdit();

    try {
      const apiResp = await updateUser(userNameInput);
      dispatch(setUserName(userNameInput));
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    }
  };

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
                placeholder={userInfo.userName}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text"
                id="firstname"
                value={userInfo.firstName}
                disabled={true}
              />
            </div>
            <div className="edit-input-wrapper">
              <label htmlFor="lastname">Last name:</label>
              <input
                type="text"
                id="lastname"
                value={userInfo.lastName}
                disabled={true}
              />
            </div>
            <div className="edit-buttons">
              <button className="edit-button" onClick={(e) => handleSave(e)}>
                Save
              </button>
              <button className="edit-button" onClick={() => handleEdit()}>
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
