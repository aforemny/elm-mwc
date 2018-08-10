module Mwc.Snackbar
    exposing
        ( Ports
        , Snack
        , SnackbarConfig
        , ports
        , setActionOnBottom
        , setDismissesOnAction
        , setMultiline
        , setTimeout
        , show
        , snack
        , snackbar
        , snackbarConfig
        )

{-|

@docs SnackbarConfig
@docs snackbar
@docs snackbarConfig
@docs Ports
@docs ports
@docs Snack
@docs snack
@docs show
@docs setDismissesOnAction
@docs setTimeout
@docs setMultiline
@docs setActionOnBottom

-}

import Html exposing (Html)
import Html.Attributes as Html
import Json.Encode as Encode exposing (Value)
import Time exposing (Time)


type alias SnackbarConfig msg =
    { message : String
    , timeout : Time
    , multiline : Bool
    , actionText : String
    , actionOnBottom : Bool
    , dismissOnAction : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


snackbar : SnackbarConfig msg -> Html msg
snackbar config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-snackbar" config.additionalAttributes []


snackbarConfig : SnackbarConfig msg
snackbarConfig =
    { message = ""
    , timeout = 0
    , multiline = False
    , actionText = ""
    , actionOnBottom = False
    , dismissOnAction = False
    , additionalAttributes = []
    }


type alias Snack =
    { dismissesOnAction : Bool
    , message : String
    , actionText : String
    , timeout : Time
    , multiline : Bool
    , actionOnBottom : Bool
    }


defaultSnack : Snack
defaultSnack =
    { dismissesOnAction = False
    , message = ""
    , actionText = ""
    , timeout = 0
    , multiline = False
    , actionOnBottom = False
    }


snack : { message : String, actionText : String } -> Snack
snack { message, actionText } =
    { defaultSnack
        | message = message
        , actionText = actionText
    }


setDismissesOnAction : Bool -> Snack -> Snack
setDismissesOnAction dismissesOnAction snack =
    { snack | dismissesOnAction = True }


setTimeout : Time -> Snack -> Snack
setTimeout timeout snack =
    { snack | timeout = timeout }


setMultiline : Bool -> Snack -> Snack
setMultiline multiline snack =
    { snack | multiline = multiline }


setActionOnBottom : Bool -> Snack -> Snack
setActionOnBottom actionOnBottom snack =
    { snack | actionOnBottom = actionOnBottom }


setMessage : String -> Snack -> Snack
setMessage message snack =
    { snack | message = message }


setActionText : String -> Snack -> Snack
setActionText actionText snack =
    { snack | actionText = actionText }


type Ports
    = Ports
        { action : String
        , id : String
        , snack : Maybe Snack
        }


ports : (Value -> Cmd msg) -> Ports -> Cmd msg
ports portUnsafe ports =
    portUnsafe (encodePorts ports)


encodePorts : Ports -> Value
encodePorts (Ports ports) =
    Encode.object
        [ ( "action", Encode.string ports.action )
        , ( "id", Encode.string ports.id )
        , ( "snack", Maybe.withDefault Encode.null (Maybe.map encodeSnack ports.snack) )
        ]


encodeSnack : Snack -> Value
encodeSnack snack =
    Encode.object
        [ ( "dismissesOnAction", Encode.bool snack.dismissesOnAction )
        , ( "message", Encode.string snack.message )
        , ( "actionText", Encode.string snack.actionText )
        , ( "timeout", Encode.float snack.timeout )
        , ( "multiline", Encode.bool snack.multiline )
        , ( "actionOnBottom", Encode.bool snack.actionOnBottom )
        ]


show : String -> Snack -> Ports
show id snack =
    Ports { action = "show", id = id, snack = Just snack }
