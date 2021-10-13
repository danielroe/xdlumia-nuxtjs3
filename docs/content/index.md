---
navigation: false
template: Page
title: The Hybrid Vue Framework
description: '使用 Vue 3 构建您的下一个应用程序，体验混合渲染、强大的数据获取和新功能。Nuxt 3 是一个开源框架，使 Web 开发变得简单而强大。'
---

::HomeHero
---
primary:
  text: Star on GitHub
  url: https://github.com/nuxt/framework
  icon: IconGitHub
---

#title
The Hybrid [Vue]{.text-primary} Framework

#description
使用 Vue 3 构建您的下一个应用程序，体验混合式渲染、强大的数据获取和新功能。Nuxt 3 是一个开源框架，使 Web 开发变得简单而强大。

#secondary-button
:button-link[开始]{ href="/getting-started" size="medium" aria-label="Get started" }
::

::home-features{.dark:bg-secondary-darkest .bg-gray-50}
---
category: 发现
---
#title
新功能

#description
Nuxt 3 已重新架构，内核更小，并针对更快的性能和更好的开发人员体验进行了优化。

#default
  ::section-content-item
  ---
  title: Lighter
  description: Up to 75x smaller server deployments and smaller client bundle targeting modern browsers.
  image: IconFeather
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Faster
  description: '优化的冷启动与动态服务器代码拆分，由 nitro 提供支持.'
  image: IconRabbit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  soon: true
  title: Hybrid
  description: 'Incremental Static Generation and other advanced modes are now possible.'
  image: IconHybrid
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Suspense
  description: 'Fetch data in any component, before or after navigation.'
  image: IconSuspense
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Composition API
  description: "使用 Composition API 和 Nuxt 3 的可组合物实现真正的代码可重用性。"
  image: IconCAPI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt CLI
  description: '全新的零依赖体验，可轻松搭建脚手架和模块集成。'
  image: IconCLI
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  soon: true
  title: Nuxt Devtools
  description: 'Work faster with info and quick fixes right in the browser.'
  image: IconDevtools
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Nuxt Kit
  description: 'Brand new module development with Typescript and cross-version compatibility.'
  image: IconKit
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Webpack 5
  description: 'Faster build time and smaller bundle size, with no configuration required.'
  image: IconWebpack
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vite
  description: 'Vue 3 是您下一个 Web 应用程序的坚实基础。'
  image: IconVite
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: Vue 3
  description: 'Vue 3 is a solid foundation for your next web app.'
  image: IconVue
  imageClass: w-10 h-10
  ---
  ::
  ::section-content-item
  ---
  title: TypeScript
  description: 'Built with native TypeScript and ESM - no extra steps required.'
  image: IconTypeScript
  imageClass: w-10 h-10
  ---
  ::
#bottom
  :button-link[开始]{ href="/getting-started" size="medium" aria-label="Get started" }
::

::section{.py-20 .text-lg}
  ::nuxt-container{.text-justify}
    :icon-nuxt-nitro{.h-32}
    :headline[Nitro Engine]

    We worked for 9 months on Nuxt's new server engine for Nuxt: [**Nitro**](/concepts/server-engine). It unlocks new **full-stack capabilities** to Nuxt server and beyond.

    In development, it uses [Rollup](https://rollupjs.org/guide/en/) and [Node.js workers](https://nodejs.org/api/worker_threads.html) for your server code and context isolation. It also **generates your server API** by reading files in [`server/api/`](/docs/directory-structure/server#api-routes) and **server middleware** from [`server/middleware/`](/docs/directory-structure/server#server-middleware).

    In production, it builds your app and server into one universal [`.output`](/docs/directory-structure/output) directory. This **output is light**: minified and removed from any Node.js modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node.js, Serverless, Workers, Edge-side rendering or purely static.

    The output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a **true hybrid framework** for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets.

    The foundation of the Nitro server is rollup and [h3](https://github.com/unjs/h3): a minimal http framework built for high performance and portability.

    :button-link[Learn more about Nitro]{ href="/concepts/server-engine" size="medium" aria-label="Learn more about Nitro" }
  ::
::

::section{.dark:bg-secondary-darkest .bg-gray-50 .py-20 .text-justify}
  ::nuxt-container{.text-justify}
    :icon-nuxt-bridge{.h-32}
    :headline[Nuxt Bridge]

    We moved to [Vue 3](https://v3.vuejs.org/) and re-wrote Nuxt after 4 years of development to make it a strong foundation for the future.

    ### Smooth upgrade to Nuxt 3

    We've worked to make the upgrade as easy as possible between Nuxt 2 and Nuxt 3.

    ::list
    - Legacy plugins and modules will keep working
    - Nuxt 2 config is compatible
    - Partial pages options API available
    ::

    ### Bringing Nuxt 3 experience to your existing Nuxt 2 project

    As we've been working on new features for Nuxt 3, we've back-ported some of them to Nuxt 2.

    ::list{.mb-8}
    - Using [Nitro server](/concepts/server-engine) with Nuxt 2
    - Using Composition API (same as Nuxt 3) with Nuxt 2
    - Using new CLI and Devtools with Nuxt 2
    - Progressively upgrade to Nuxt 3
    - Compatibility with Nuxt 2 module ecosystem
    - Upgrade piece by piece (Nitro, Composition API, Nuxt Kit)
    ::

    :button-link[Get started with Nuxt Bridge]{ href="/getting-started/bridge" size="medium" aria-label="Get started" }
  ::
::
