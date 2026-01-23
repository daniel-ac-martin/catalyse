Catalyse
========

A collection of tools and libraries for building [React] applications, projects,
and design systems. It aims to enable you to:
1. quickly prototype services
2. quickly develop multiple, secure, accessible applications
3. publish and share any components or libraries your team builds
4. document your project
5. quickly set-up Continuous Integration (CI)
6. work to common standards

Catalyse aims to provide a 'batteries-included' framework for building React
projects and, as such, is highly opinionated. Specifically, we use:
- [React Router] as our isomorphic application framework
- [Fastify] as our server framework
- [PNPM] as our package and monorepo/workspace manager
- [Storybook] to aid component development
- [GitHub Actions] for CI/CD


Features
--------

- _All features provided by [React Router] in framework mode._
- 'Magnificent monoliths' via Fastify-based APIs.
- A monorepo structure that allows you to manage multiple applications and to individual package your custom React components for re-use.
- Code generators for kick-starting any new components, libraries or applications
- A full-featured test-harness, including:
  - unit testing
  - functional testing
  - visual regression testing (via [Chromatic])
  - SAST (via [CodeQL])
  - DAST (via [ZAP])
- A CI system built in [GitHub Actions]
- Basic cyber-security hardening of the HTTP server (inc. CSP)
- Support for various authentication methods, including:
  - [Basic Auth]
  - [OpenID Connect] (with support for RBAC)
- JSON logs in production, human-readable logs in development
- A framework for building advanced non-linear form journeys for collecting information from users. (UNFINISHED)

**See:** [About Catalyse]


Getting started
---------------

**See:** [Getting started]


Working on this repository
--------------------------

**See:** [Working on and contributing to Catalyse]


Navigating this repository
--------------------------

The is a monorepo and so it contains multiple packages. The packages are
broken down into libraries, components and applications.

- [`apps/`](./apps/)
  Applications
- [`lib/`](./lib/)
  Libraries
- [`components/`](./components/)
  Components (Special libraries that include assets, such as Sass code
  and images, and are intended to be consumed via a bundler. The structure
  of these is explained below.)
- `coverage/`
  A code coverage report that can be created by running `make test`.


Files in a typical component
----------------------------

1. `src/Component.ts[x]`
   The implementation of the component. It may reference other `.tsx` files in
   order to separate business logic from presentation logic. Otherwise, it will
   typically be very simple and contain mostly HTML code.
2. `assets/Component.scss`
   The SCSS (CSS) code that pertains to the component.
3. `spec/Component.spec.ts`
   The tests for this component.
4. `spec/Component.mdx`
   The main documentation of the component. This is what people will use to
   understand how to consume the component.
5. `spec/Component.stories.tsx`
   The 'stories' / scenarios which a referenced by the documentation and can be
   used in visual regression testing.
6. `README.md`
   Very simple documentation to aid people browsing the code via GitHub or NPM.


Contributing
------------

[Pull requests] are welcome but it is probably best to [open an issue]
first to discuss what you think needs to change.

I would like this project to be as easy as possible to both consume and
contribute to. To that end, if you think any of the documentation isn't
clear please do let me know by raising an [issue] or a [pull request].

If you run into any problems or have any questions, please do [get in touch].


[Catalyse]: https://github.com/daniel-ac-martin/catalyse
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/
[Fastify]: https://fastify.dev/
[PNPM]: https://pnpm.io/
[Storybook]: https://storybook.js.org/
[GitHub Actions]: https://github.com/features/actions
[Chromatic]: https://www.chromatic.com/
[CodeQL]: https://codeql.github.com/
[ZAP]: https://www.zaproxy.org/
[Basic Auth]: https://en.wikipedia.org/wiki/Basic_access_authentication
[OpenID Connect]: https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)
[Getting started]: ./docs/get-started.md
[About Catalyse]: ./docs/about.md
[Working on and contributing to Catalyse]: ./docs/contributing.md
[Pull requests]: ./pulls
[open an issue]: ./issues/new
[pull request]: ./pulls
[issue]: ./issues
[get in touch]: ./issues/new
