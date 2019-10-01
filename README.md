# Two00 Docs

> The documentation for [two00.com](https://two00.com)

## Set up for development

> Node.js needs to be installed

**Clone**

```sh
$ git clone git@github.com:two00-com/docs.git
```

**Install dependencies**

```sh
# change directory
$ cd /docs
# install dependencies
$ npm i
```

## Usage

**Start development**

```sh
# start development server listening on http://localhost:3000
$ npm start
```

**Build Production**

```sh
# build production bundle in ./build
$ npm run build
```

**Deploy**

```sh
# build production bundle in ./build and push ./build to branch gh-pages
$ npm run deploy
```
