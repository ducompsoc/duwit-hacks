import type * as React from "react"

declare module "react" {
  interface CSSProperties {
    [index: `--${string}`]: string | number
  }
}

// CSS module declarations
declare module "*.css" {
  const content: Record<string, string>
  export default content
}

declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

declare module "*.sass" {
  const content: Record<string, string>
  export default content
}
