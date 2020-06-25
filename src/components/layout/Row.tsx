import React from "react"

type Props = {
  crossAxistAlignment?: 'top' | 'center' | 'bottom';
  direction?: 'vertical' | 'horizontal';
}

export const Row = (props: React.PropsWithChildren<Props>) => {
  return <div>{props.children}</div>
}