Catalyse - Components
=====================

All of the Catalyse [React] components, in a single package.


Using this package
------------------

First install the package into your project:

```shell
npm install -S @catalyse/components
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import { AnchorList } from '@catalyse/components';

export const MyComponent = props => (
  <AnchorList
    items=[
      { href: '/foo', text: 'Foo' },
      { href: '/bar', text: 'Bar' },
      { href: '/baz', text: 'Baz' }
    ]
  />
);

export default MyComponent;
```


Working on this package
-----------------------

Before working on this package you must install its dependencies using
the following command:

```shell
pnpm install
```


### Testing

```shell
npm test
```


### Building

```shell
npm run build
```


### Clean-up

```shell
npm run clean
```


[React]: https://reactjs.org/
