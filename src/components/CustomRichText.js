import { PrismicRichText } from "@prismicio/react"


import React from 'react'

function CustomRichText({field}) {
  return (
    <PrismicRichText
      field={field}
      components={{
        paragraph: ({ children }) => <p>{children}</p>,
        heading1: ({ children }) => <h1 className="font-bold mb-2 text-5xl">{children}</h1>,
        heading2: ({ children }) => <h2 className="font-bold mb-2 text-4xl">{children}</h2>,
        heading3: ({ children }) => <h3 className="font-bold mb-2 text-3xl">{children}</h3>,
        heading4: ({ children }) => <h4 className="font-bold mb-2 text-2xl">{children}</h4>,
        heading5: ({ children }) => <h5 className="font-bold mb-2 text-xl">{children}</h5>,
        heading6: ({ children }) => <h6 className="font-bold mb-2 text-lg">{children}</h6>,
      }}
    />
  )
}

export default CustomRichText


