import React from 'react';
import { render } from 'react-dom';

const Application: React.SFC<{}> = () => (
  <h1>React Stylist</h1>
);

render(<Application />, document.getElementById('root'));