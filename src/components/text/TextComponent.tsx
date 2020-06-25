import React from "react"

enum FonStyle {
  italic,
  bold,
}

enum TextAlign {
  left,
  right,
  start,
  center,
  end,
  justify
}

type TextStyle = {
  fontStyle?: FonStyle;
  color?: string;
}

interface Props {
  style?: TextStyle;
  textAlign?: TextAlign;
}

export const TextComponent: React.FC<Props> = (props) => {
  return <>{props.children}</>
}