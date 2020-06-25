import { Container } from "../components/layout/Container"
import React from "react"
import { TextComponent } from "../components/text/TextComponent"

export const ContainerExample = () => {
  return <Container color="red">
    <TextComponent>hello</TextComponent><TextComponent>world</TextComponent></Container>
}