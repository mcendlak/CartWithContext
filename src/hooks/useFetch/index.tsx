import { useState, useEffect } from "react";
import { IItemData } from "../../context/types";

// TODO - create a ShopResource class
// ShopResource
// getItems

export const useFetch = (url: string) => {
  const [data, setData] = useState<IItemData[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        // const items = await ShopResource.getItems();
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setData(data);
        setError("");
      } catch (err) {
        setError("Could not fetch the data");
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
