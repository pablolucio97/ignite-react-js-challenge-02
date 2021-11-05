import { ReactNode, memo } from "react"

type SidebarProps = {
  children: ReactNode;
}

export function SideBarComponent({ children }: SidebarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {children}
      </div>
    </nav>
  )
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.children, nextProps.children)
})