import React, { useEffect, useState } from "react";

export const useAuthorised = (): Boolean => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    if (
      (localStorage.getItem("email") ===
        process.env.NEXT_PUBLIC_AUTHORISED_USER_1 ||
        localStorage.getItem("email") ===
          process.env.NEXT_PUBLIC_AUTHORISED_USER_2 ||
        localStorage.getItem("email") ===
          process.env.NEXT_PUBLIC_AUTHORISED_USER_3 ||
        localStorage.getItem("email") ===
          process.env.NEXT_PUBLIC_AUTHORISED_USER_4) &&
      localStorage.getItem("password") ===
        process.env.NEXT_PUBLIC_AUTHORISED_PASSWORD
    ) {
      setIsAuthorised(true);
    }
  }, []);

  return isAuthorised;
};
