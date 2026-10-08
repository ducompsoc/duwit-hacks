"use client"

import { requestHomeScroll, scrollHomeTop, scrollPageTop, scrollToId } from "@/lib/scroll"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

type HashLinkProps = {
  href: string
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export function HashLink({ href, className, children, onClick, ...rest }: HashLinkProps) {
  const pathname = usePathname()
  const hashIndex = href.indexOf("#")
  const hash = hashIndex >= 0 ? href.slice(hashIndex + 1) : ""
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) || "/" : href
  const onHome = pathname === "/"

  if (hash && onHome && path === "/") {
    return (
      <a
        href={`/#${hash}`}
        className={className}
        {...rest}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          onClick?.(event)
          if (event.defaultPrevented) return
          event.preventDefault()
          scrollToId(hash)
        }}
      >
        {children}
      </a>
    )
  }

  if (!hash && path === "/" && onHome) {
    return (
      <a
        href="/"
        className={className}
        {...rest}
        onClick={(event) => {
          onClick?.(event)
          if (event.defaultPrevented) return
          event.preventDefault()
          scrollHomeTop()
        }}
      >
        {children}
      </a>
    )
  }

  if (!hash && path === pathname) {
    return (
      <a
        href={href}
        className={className}
        {...rest}
        onClick={(event) => {
          onClick?.(event)
          if (event.defaultPrevented) return
          event.preventDefault()
          scrollPageTop()
        }}
      >
        {children}
      </a>
    )
  }

  if (hash && path === "/") {
    return (
      <Link
        href="/"
        scroll={false}
        className={className}
        {...rest}
        onClick={(event) => {
          onClick?.(event)
          requestHomeScroll(hash)
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} scroll={true} className={className} {...rest} onClick={onClick}>
      {children}
    </Link>
  )
}
