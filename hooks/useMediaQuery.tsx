"use client";

import { useState, useEffect } from "react";

interface MediaQueryProps {
  query: string;
}

const useMediaQuery = ({ query }: MediaQueryProps) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;