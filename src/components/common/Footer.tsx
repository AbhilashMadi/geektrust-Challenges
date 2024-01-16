import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="text-center bg-muted p-4 text-foreground">
      &copy; {new Date().getFullYear()} TeeRex Store
      <br />
      <Link
        to="https://github.com/AbhilashMadi/geektrust-Challenges.git"
        className="text-sm underline decoration-wavy underline-offset-2 dark:text-lime-400"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
      >
        Source Code: GitHub &#8599;
      </Link>
    </footer>
  );
};

export default Footer;
