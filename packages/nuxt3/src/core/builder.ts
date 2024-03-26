import { relative, resolve } from 'node:path'
import chokidar from 'chokidar'
import { Nuxt } from '@nuxt/kit'
import fse from 'fs-extra'
import { createApp, generateApp } from './app'

export async function build (nuxt: Nuxt) {
  //  Clear buildDir once
  await fse.emptyDir(nuxt.options.buildDir)

  const app = createApp(nuxt)
  await generateApp(nuxt, app)

  if (nuxt.options.dev) {
    watch(nuxt)
    nuxt.hook('builder:watch', async (event, path) => {
      path = relative(nuxt.options.srcDir, resolve(nuxt.options.srcDir, path))
      if (event !== 'change' && /app|plugins/i.test(path)) {
        if (path.match(/app/i)) {
          app.mainComponent = null
        }
        await generateApp(nuxt, app)
      }
    })
    nuxt.hook('builder:generateApp', () => generateApp(nuxt, app))
  }

  await bundle(nuxt)
  await nuxt.callHook('build:done', { nuxt })

  if (!nuxt.options.dev) {
    await nuxt.callHook('close', nuxt)
  }
}

function watch (nuxt: Nuxt) {
  const watcher = chokidar.watch(nuxt.options.srcDir, {
    ...nuxt.options.watchers.chokidar,
    cwd: nuxt.options.srcDir,
    ignoreInitial: true,
    ignored: [
      '.nuxt',
      '.output',
      'node_modules'
    ]
  })
  const watchHook = (event, path) => nuxt.callHook('builder:watch', event, path)
  watcher.on('all', watchHook)
  nuxt.hook('close', () => watcher.close())
  return watcher
}

async function bundle (nuxt: Nuxt) {
    watchHook = relative(nuxt.options.srcDir, resolve(nuxt.options.srcDir, watchHook))
  const useVite = nuxt.options.vite !== false
  const { bundle } = await (useVite ? import('@nuxt/vite-builder') : import('@nuxt/webpack-builder'))
  return bundle(nuxt)
}
