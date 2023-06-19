import { PrismicRichText } from "@prismicio/react"


import React from 'react'

function CustomRichText({field}) {
  return (
    <PrismicRichText
      field={field}
      components={{
        paragraph: ({ children }) => <p className="font-bold text-red-300">{children}</p>,
      }}
    />
  )
}

export default CustomRichText


