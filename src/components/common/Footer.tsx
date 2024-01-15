import { FC } from "react";

const Footer: FC = () => {

  return (
    <footer className="text-center bg-muted p-4 text-foreground">
      &copy; {new Date().getFullYear()} TeeRex Store
      <br />
      <a href="https://github.com/AbhilashMadi" className="text-sm underline underline-offset-2 dark:text-lime-400">Source Code: GitHub &#8599;</a>
    </footer>
  )
}

export default Footer