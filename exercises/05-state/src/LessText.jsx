import React from 'react'
import { useState } from 'react'

export default function LessText( {text, maxLength}) {
  const [showText, setShowText] = useState(true);
  const hideText = () => setShowText(false)
  const moreText = () => setShowText(true)
  return (
    <div>
      {showText ? text : text.substring(0, maxLength)}
      <button onClick={moreText}>Read More</button>
      <button onClick={hideText}>Read Less</button>
    </div>
  )
}
