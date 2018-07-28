{ pkgs ? import <nixpkgs> {} }:
with pkgs;
with stdenv;
mkDerivation {
  name = "elm-mwc";
  buildInputs = with elmPackages; [ elm-make elm-package elm-repl ];
}
