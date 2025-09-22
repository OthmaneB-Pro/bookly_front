import { createContext } from "react";
import type { ResourceType } from "../types/resource";

type resourceContextType = {
    resource : ResourceType[];
    setResource : React.Dispatch<React.SetStateAction<ResourceType[]>>;

}

export const resourceContext = createContext<resourceContextType>({
    resource : [],
    setResource : () => {}

})