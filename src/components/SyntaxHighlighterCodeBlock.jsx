import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

const SyntaxHighlighterCodeBlock = props => {
  const code = props.children.props.children.trim()
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default SyntaxHighlighterCodeBlock
