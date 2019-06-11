export function uriEncodeHtmlElements(elements) {
  return Array.from(elements)
    .reduce((encodedFields, { name, value }) => {
      if (value.length > 0) {
        encodedFields.push(
          encodeURIComponent(name) + "=" + encodeURIComponent(value)
        )
      }

      return encodedFields
    }, [])
    .join("&")
}
