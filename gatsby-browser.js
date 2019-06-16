import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Location } from "@reach/router"

import LiveEditorCodeBlock from "components/LiveEditorCodeBlock"
import SyntaxHighlighterCodeBlock from "components/SyntaxHighlighterCodeBlock"
import { LocationContext } from "components/LocationContext"

const components = {
  a: ({ children, href, ...props }) => {
    if (href.startsWith("/")) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      )
    } else {
      return (
        <a href={href} {...props} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
  },
  pre: props => {
    if (props.children.props["react-live"]) {
      return <LiveEditorCodeBlock {...props} />
    } else {
      return <SyntaxHighlighterCodeBlock {...props} />
    }
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => {
  return (
    <Location>
      {({ location }) => (
        <LocationContext.Provider value={location}>
          <MDXProvider components={components}>{element}</MDXProvider>
        </LocationContext.Provider>
      )}
    </Location>
  )
}
