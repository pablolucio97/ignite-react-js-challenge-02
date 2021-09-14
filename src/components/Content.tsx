import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode;
  title: string;
}

export function Content({ children, title }: ContentProps) {
  return (
    <div className="container">
      <main>
      <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  )
}