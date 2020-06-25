import React from "react"
import { Container } from "../components/layout/Container"
import { Row } from "../components/layout/Row"
import { TextComponent } from "../components/text/TextComponent"

export const RowExample = () => {
  return <Row>
    <TextComponent>hello</TextComponent><TextComponent>world</TextComponent>
  </Row>
}