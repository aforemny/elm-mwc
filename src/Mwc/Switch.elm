module Mwc.Switch exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias Config msg =
    { checked : Bool
    , disabled : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


switchConfig : Config msg
switchConfig =
    { checked = False
    , disabled = False
    , additionalAttributes = []
    }


switch : Config msg -> Html msg
switch config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-switch"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "checked") (bool config.checked)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            ]
            ++ config.additionalAttributes
        )
        []
