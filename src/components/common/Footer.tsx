import { FC } from "react"

const Footer: FC = () => {

  return (
    <footer className="text-center bg-muted p-4 text-foreground">&copy; TeeRex Store {new Date().getFullYear()}</footer>
  )
}

export default Footer