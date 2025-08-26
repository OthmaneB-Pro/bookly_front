import axios from "axios";
import type { LoginType, RegisterType } from "../types/user";

export const registerUser = async (userData: RegisterType) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/register",
      userData
    );
    const token = res.data.token;
    localStorage.setItem("jwt", token);
  } catch (err) {
    console.log("Une erreur est intervenue lors de l'inscription", err);
    throw err;
  }
};

export const loginUser = async (userData: LoginType) => {
  try {
    const res = await axios.post("http://localhost:8080/auth/login", userData);
    const token = res.data.token;
    localStorage.setItem("jwt", token);
  } catch (err) {
    console.log("Erreur lors de la connexion", err);
    throw err;
  }
};

export const logOut = () => {
  localStorage.removeItem("jwt");
};
