import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);

  // On page load, check for user in localStorage and set context
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Checking localStorage on load. Saved user:", savedUser); // Logging saved user

    if (savedUser) {
      setUser(savedUser); // Set the user from localStorage
    } else {
      console.log("No user found in localStorage"); // Logging if no user is found
    }
  }, []);

  // Persist user to localStorage whenever user data changes
  useEffect(() => {
    if (user) {
      console.log("Saving user to localStorage:", user); // Log user data before saving
      localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
    } else {
      console.log("No user, clearing user from localStorage.");
      localStorage.removeItem("user"); // Remove user from localStorage on logout
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loggedOut, setLoggedOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
