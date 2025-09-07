import axios from "axios";
import type { ResourceType } from "../types/resource";

const token = localStorage.getItem("jwt");

export const findAllResource = async (
  setResource: React.Dispatch<React.SetStateAction<ResourceType[] | undefined>>
) => {
  try {
    const res = await axios.get("http://localhost:8080/resource", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setResource(res.data);
  } catch (err) {
    console.error(err);
  }
};

export const createResource = async () => {
  try {
    const res = await axios.post("http://localhost:8080/resource", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
