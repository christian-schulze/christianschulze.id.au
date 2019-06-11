import React, { useCallback, useRef } from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

import Bio from "components/Bio"
import Layout from "layouts/Layout"
import SEO from "components/Seo"

const Form = styled.form`
  width: 100%;
`

const Field = styled.label`
  width: 100%;
`

const Label = styled.label`
  width: 100%;
`

const TextInput = styled.input`
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
`

const encode = elements => {
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

const Contact = () => {
  const submitErrorRef = useRef("")

  const handleSubmit = useCallback(async event => {
    event.preventDefault()

    const form = event.target
    submitErrorRef.current.value = ""
    try {
      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(form.elements),
      })
      navigate(form.getAttribute("action"))
    } catch (error) {
      submitErrorRef.current.value = error.message
    }
  })

  return (
    <Layout>
      <SEO title="Contact" />
      <Bio />
      <Form
        action="/contact-thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="contact"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <span ref={submitErrorRef} className="form-error" />
        <div hidden>
          <Label>
            {"Don’t fill this out: "}
            <TextInput name="bot-field" />
          </Label>
        </div>
        <Field>
          <Label htmlFor="name">Your name</Label>
          <TextInput
            className="input"
            type="text"
            name="name"
            id="name"
            required={true}
          />
        </Field>
        <Field>
          <Label className="label" htmlFor="email">
            Email
          </Label>
          <TextInput
            className="input"
            type="email"
            name="email"
            id="email"
            required={true}
          />
        </Field>
        <Field>
          <Label htmlFor="message">Message</Label>
          <TextArea
            className="textarea"
            id="message"
            name="message"
            required={true}
            rows={3}
          />
        </Field>
        <div className="field">
          <button className="button is-link" type="submit">
            Send
          </button>
        </div>
      </Form>
    </Layout>
  )
}

export default Contact
