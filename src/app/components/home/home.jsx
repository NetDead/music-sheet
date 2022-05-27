import React from 'react';
import { hot } from 'react-hot-loader';

import { Title } from '../title';

const HomeComponent = React.memo(() => (
  <Title>Hello, world!</Title>
));

HomeComponent.displayName = 'HomeComponent';

export const Home = hot(module)(HomeComponent);
