module Mwc.IconToggle exposing (..)

import Html exposing (Html, text)
import Html.Events as Html
import Mwc.Attributes exposing (boolProp, stringProp)


type alias IconToggleConfig msg =
    { disabled : Bool
    , on : Bool
    , icon : String
    , offIcon : String
    , label : String
    , offLabel : String
    , onToggle : Maybe msg
    , additionalAttributes : List (Html.Attribute msg)
    }


iconToggle : IconToggleConfig msg -> Html msg
iconToggle config =
    let
        offIcon =
            if config.offIcon == "" then
                config.icon
            else
                config.offIcon

        offLabel =
            if config.offLabel == "" then
                config.icon
            else
                config.offLabel
    in
    Html.node "mwc-icon-toggle"
        (List.filterMap identity
            [ Just (boolProp "disabled" config.disabled)
            , Just (boolProp "on" config.on)
            , Just (stringProp "icon" config.icon)
            , Just (stringProp "offIcon" offIcon)
            , Just (stringProp "label" config.label)
            , Just (stringProp "offLabel" offLabel)
            , if config.disabled then
                Nothing
              else
                Maybe.map Html.onClick config.onToggle
            ]
            ++ config.additionalAttributes
        )
        []


iconToggleConfig : IconToggleConfig msg
iconToggleConfig =
    { disabled = False
    , on = False
    , icon = ""
    , offIcon = ""
    , label = ""
    , offLabel = ""
    , onToggle = Nothing
    , additionalAttributes = []
    }
