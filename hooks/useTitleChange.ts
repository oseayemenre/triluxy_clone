import { useState, useEffect } from "react";

export default function useTitleChange() {
  const activities = [
    "Tours",
    "Adventures",
    "Flight",
    "Hotels",
    "Cars",
    "Cruises",
    "Package",
    "Fun",
    "People",
  ];

  let index = 0;

  const [title, setTitle] = useState(activities[index]);

  useEffect(() => {
    const loop = setInterval(() => {
      setTitle(activities[index + 1]);
      index++;

      if (index > 7) {
        index = -1;
      }
    }, 2000);

    return () => clearInterval(loop);
  }, []);

  return { title };
}
