module Mwc.IconToggle exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias IconToggleConfig msg =
    { disabled : Bool
    , on : Bool
    , icon : String
    , offIcon : String
    , label : String
    , offLabel : String
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
    in
    Html.node "mwc-icon-toggle"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Maybe.map (Html.attribute "on") (bool config.on)
            , Just (Html.attribute "icon" config.icon)
            , Just (Html.attribute "offIcon" config.offIcon)
            , Just (Html.attribute "label" config.label)
            , Just (Html.attribute "offLabel" config.offLabel)
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
    , additionalAttributes = []
    }
