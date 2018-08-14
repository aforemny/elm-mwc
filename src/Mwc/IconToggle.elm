module Mwc.IconToggle exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html


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
        bool v =
            if v then
                Just ""
            else
                Nothing

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
            [ Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Maybe.map (Html.attribute "on") (bool config.on)
            , if config.disabled then
                Nothing
              else
                Maybe.map Html.onClick config.onToggle
            , Just (Html.attribute "icon" config.icon)
            , Just (Html.attribute "offIcon" offIcon)
            , Just (Html.attribute "label" config.label)
            , Just (Html.attribute "offLabel" offLabel)
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
