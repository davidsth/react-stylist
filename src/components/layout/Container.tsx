import React from "react"

type Props = {
  margin?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const Container = (props: React.PropsWithChildren<Props>) => {
  return <div style={{ color: props.color }}>{props.children}</div>
}