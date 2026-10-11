# fabricmc.net

This repository contains the source code and content for [https://fabricmc.net/](https://fabricmc.net/).

## License

The code is licensed as MIT as detailed in `LICENSE`, unless otherwise indicated.

The contents of this website, unless otherwise indicated, are licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

The existing Minima 2.5.1 templates and styles are included in `_layouts` and
`_sass`, with the theme's MIT license in `_sass/minima/LICENSE.txt`.

## Development

Use the Node version in `.nvmrc` (`nvm install` and `nvm use` if using nvm).
Install dependencies and start the website from the repository root:

```sh
npm ci
npm run dev
```

Open http://localhost:4000/.

### Preview the build

Build the website and serve the generated files without live reloading:

```sh
npm run build:site
npm run preview
```

Open http://localhost:4173/. Preview serves the existing `_site` directory;
run the build again to include further changes.

### Running the CLI

Run CLI commands from the repository root:

```sh
npm run cli -- init
npm run cli -- versions
```
