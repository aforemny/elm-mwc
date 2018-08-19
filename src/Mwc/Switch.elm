module Mwc.Switch exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html


type alias SwitchConfig msg =
    { checked : Bool
    , disabled : Bool
    , onToggle : Maybe msg
    , additionalAttributes : List (Html.Attribute msg)
    }


switchConfig : SwitchConfig msg
switchConfig =
    { checked = False
    , disabled = False
    , onToggle = Nothing
    , additionalAttributes = []
    }


switch : SwitchConfig msg -> Html msg
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
            , if config.disabled then
                Nothing
              else
                Maybe.map Html.onClick config.onToggle
            ]
            ++ config.additionalAttributes
        )
        []
