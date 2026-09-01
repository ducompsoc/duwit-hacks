import Link from "next/link"
import { BlogNav } from "@/components/blog-nav"
import "@/styles/blog.css"

type BlogShellProps = {
  children: React.ReactNode
  active?: "blog"
}

export function BlogShell({ children, active }: BlogShellProps) {
  return (
    <div className="blog-page">
      <div className="blog-page-bg" aria-hidden="true" />
      <BlogNav active={active} />
      <div className="relative z-10">{children}</div>
      <footer className="site-footer blog-footer">
        <div className="site-footer-inner">
          <div>
            <p className="font-display text-sm tracking-[0.16em] text-white">DUWiT HACKS 2027</p>
            <p className="font-mono mt-2 text-[10px] tracking-[0.18em] text-white/45 uppercase">
              Durham University Women in Tech
            </p>
          </div>
          <Link className="site-footer-mail" href="/">
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  )
}
