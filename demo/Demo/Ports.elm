port module Demo.Ports exposing (..)

import Json.Encode exposing (Value)
import Mwc.Snackbar as Snackbar
import Time exposing (Time)


snackbar : Snackbar.Ports -> Cmd msg
snackbar =
    Snackbar.ports snackbarUnsafe


port snackbarUnsafe : Value -> Cmd msg
