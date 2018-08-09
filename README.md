# elm-mwc

Elm bindings to
[material-components-web-components](https://github.com/material-components/material-components-web-components).

[Demo](https://aforemny.github.io/elm-mwc)


## Build instructions

Clone this repository:

```sh
$ git clone --recursive github.com:aforemny/elm-mwc.git
cd ./elm-mwc
```

General build instructions are then:

```sh
$ make
$ (cd material-components-web-components && npm run dev)
$ ^C-c # terminate it
$ npm run dev
$ open http://localhost:8080/page.html
```

See below for OS-specific instructions.


### NixOS Linux

General build instructions:

```sh
$ nix-shell --run make
$ (cd material-components-web-components && nix-shell ../shell.nix --run "npm run dev")
$ ^C-c # terminate it
$ nix-shell --run "npm run dev"
$ open http://localhost:8081/page.html
```
