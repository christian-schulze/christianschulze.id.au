import { uriEncodeHtmlElements } from "./dom"

describe("uriEncodeHtmlElements(elements)", () => {
  const element1 = {
    name: "element1",
    value: "asdf=asdf+1234",
  }
  const element2 = {
    name: "element2",
    value: "1234/5678-4567",
  }

  const emptyElement = {
    name: "emptyElement",
    value: "",
  }

  it("encodes html like elements correctly", () => {
    expect(uriEncodeHtmlElements([element1, element2])).toEqual(
      "element1=asdf%3Dasdf%2B1234&element2=1234%2F5678-4567"
    )
  })

  it("excludes empty fields", () => {
    expect(uriEncodeHtmlElements([emptyElement])).toEqual("")
  })
})
