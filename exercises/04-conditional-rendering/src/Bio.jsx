import React from 'react'

export default function Bio({text, renderAll}) {
  return (
    <div>
      {renderAll ? <blockquote>{text}</blockquote> : <div>{text.substring(0,500)+'...'}</div>}
    </div>
  )
}
