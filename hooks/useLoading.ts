import { useState, useEffect } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(interval);
  }, []);

  return { loading };
}
