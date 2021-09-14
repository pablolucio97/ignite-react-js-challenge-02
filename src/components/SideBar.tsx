import { ReactNode } from "react"

type SidebarProps = {
  children: ReactNode;
}

export function SideBar({ children }: SidebarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {children}
      </div>
    </nav>
  )
}