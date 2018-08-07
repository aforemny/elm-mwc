module Mwc.Snackbar exposing (..)

import Html exposing (Html)
import Html.Attributes as Html
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


-- TODO: opaque
type alias Ports =
    { action : String
    , id : String
    , snack : Maybe Snack
    }


show : String -> Snack -> Ports
show id snack =
    { action = "show", id = id, snack = Just snack }
