import { createContext } from "react";
import type { ResourceType } from "../types/resource";

export type resourceContextType = {
  resource: ResourceType[];
  setResource: React.Dispatch<React.SetStateAction<ResourceType[]>>;
};

export const ResourceContext = createContext<resourceContextType>({
  resource: [],
  setResource: () => {},
});
