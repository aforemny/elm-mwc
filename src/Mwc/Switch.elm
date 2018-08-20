module Mwc.Switch exposing (..)

import Html exposing (Html, text)
import Html.Events as Html
import Mwc.Attributes exposing (boolProp)


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
    Html.node "mwc-switch"
        (List.filterMap identity
            [ Just (boolProp "checked" config.checked)
            , Just (boolProp "disabled" config.disabled)
            , if config.disabled then
                Nothing
              else
                Maybe.map Html.onClick config.onToggle
            ]
            ++ config.additionalAttributes
        )
        []
