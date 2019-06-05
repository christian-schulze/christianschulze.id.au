import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

const LiveEditorCodeBlock = props => (
  <LiveProvider code={props.children.props.children.trim()}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default LiveEditorCodeBlock
