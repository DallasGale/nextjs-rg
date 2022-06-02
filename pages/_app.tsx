import { useEffect, useState } from "react";
import "../styles/index.scss";
import { useAuthorised } from "../hooks/useAuthorised";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  // const isAuthorised = useAuthorised()

  if (isAuthorised) {
    return <Component {...pageProps} />;
  }

  return (
    <div className="form-container">
      <h1 className="form-headline">Welcome to Buzz&apos;s blog!</h1>
      <form className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@address.com"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleFormSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default MyApp;
