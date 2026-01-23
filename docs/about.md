About Catalyse
==============

[Catalyse] is a collection of tools and libraries for building [React]
applications, projects, and design systems. It aims to enable you to:
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

**See:** [Getting started]


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
[Getting started]: ./get-started
