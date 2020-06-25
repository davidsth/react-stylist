import React from 'react';
import { render } from 'react-dom';
import { ContainerExample } from './examples/ContainerExample';
import { RowExample } from './examples/RowExample';

const Application: React.SFC<{}> = () => (
  <>
    <h1>React Stylist</h1>
    <ContainerExample />
    <RowExample />
  </>
);

render(<Application />, document.getElementById('root'));