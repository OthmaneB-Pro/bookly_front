import { useEffect, useState } from "react";
import { findAllResource } from "../../../api/resource";
import type { ResourceType } from "../../../types/resource";

export default function ResourcePage() {
  const [resource, setResource] = useState<ResourceType[]>();

  useEffect(() => {
    findAllResource(setResource);
  }, []);
  return (
    <div>{resource ? resource.map((res) => <p key={res.id}>{res.title}</p>) : "non"};</div>
  );
}
