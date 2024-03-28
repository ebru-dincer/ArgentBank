const apiUrl = "http://localhost:3001/api/v1" 

// Recupération token login
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Object}
 */
export async function logIn (email, password) {

    try {
    const response = await fetch(apiUrl + "/user/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({"email": email, "password": password})
                });
    // console.log("response is", response)
    const logInRequest = await response.json();
    console.log("logInRequest is", logInRequest)

    return logInRequest;
    
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

// Récupération profil utilisateur
/**
 * 
 * @param {Object}  
 * @returns {Object}
 */
export async function userProfile () {

    let token = localStorage.getItem("token");
  
    try {
    const response = await fetch(apiUrl + "/user/profile", {
                    method: "POST",
                    headers: {"Authorization": `Bearer ${token}`},
                  });
    
    const userRequest = await response.json();
    console.log(userRequest)
    return userRequest;
    
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
  }


// Modification profil utilisateur
/**
 * 
 * @param {Object}  
 * @returns {Object}
 */
export async function updateUser (userName) {

  let token = localStorage.getItem("token");

  try {
  const response = await fetch(apiUrl + "/user/profile", {
                  method: "PUT",
                  headers: {"Authorization": `Bearer ${token}`},
                  body:  JSON.stringify({"userName": userName})
                });
  console.log("userName is", userName)
  const updateRequest = await response.json();
  console.log(updateRequest)
  return updateRequest;
  
} catch (erreur) {
  console.error("Erreur :", erreur);
}
}  