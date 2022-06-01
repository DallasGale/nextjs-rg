import { useEffect, useState } from "react";
import "../styles/index.scss";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [email, setEmail] = useState("user@email.com");
  const [password, setPassword] = useState("***");

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

  // console.log(process.env.NEXT_PUBLIC_AUTHORISED_USER_1);

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (
      (email === process.env.NEXT_PUBLIC_AUTHORISED_USER_1 ||
        email === process.env.NEXT_PUBLIC_AUTHORISED_USER_2 ||
        email === process.env.NEXT_PUBLIC_AUTHORISED_USER_3 ||
        email === process.env.NEXT_PUBLIC_AUTHORISED_USER_4) &&
      password === process.env.NEXT_PUBLIC_AUTHORISED_PASSWORD
    ) {
      setIsAuthorised(true);

      // Add to local storage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
  }

  if (isAuthorised) {
    return <Component {...pageProps} />;
  }

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleFormSubmit} type="submit">
        Login
      </button>
    </form>
  );
};

export default MyApp;
