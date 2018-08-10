module Mwc.Snackbar
    exposing
        ( Ports
        , Snack
        , SnackbarConfig
        , ports
        , show
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
@docs show

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
    Html.node "mwc-snackbar"
        (List.filterMap identity
            [ Just (Html.attribute "message" config.message)
            , Just (Html.attribute "timeout" (toString config.timeout))
            , Maybe.map (Html.attribute "multiline") (bool config.multiline)
            , Just (Html.attribute "actionOnBottom" config.actionText)
            , Maybe.map (Html.attribute "actionOnBottom") (bool config.actionOnBottom)
            , Maybe.map (Html.attribute "dismissOnAction") (bool config.dismissOnAction)
            ]
            ++ config.additionalAttributes
        )
        []


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
