import "../app/App.css";
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Edit from "../components/Edit";
import { useState } from "react";

/**
 *
 * @returns {jsx} <User />
 */
function User() {
  const userInfo = useSelector(selectUser);
  const [openEdit, setOpenEdit] = useState(false);

  console.log("user is", userInfo)
  const handleEdit = () => {
    setOpenEdit(!openEdit);
  };


  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          {!openEdit ? (
            <div>
              <h1>
                Welcome back
                <br />
                {userInfo.user.firstName} {userInfo.user.lastName} !
              </h1>
              <button className="edit-button" onClick={() => handleEdit()}>
                Edit Name
              </button>
            </div>
          ) : (
            // <p>test</p>
            <Edit openEdit={openEdit} handleEdit={handleEdit} />
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default User;
