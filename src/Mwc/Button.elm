module Mwc.Button exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html


type alias ButtonConfig msg =
    { raised : Bool
    , unelevated : Bool
    , outlined : Bool
    , dense : Bool
    , disabled : Bool
    , icon : String
    , label : String
    , ripple : Bool
    , onClick : Maybe msg
    , additionalAttributes : List (Html.Attribute msg)
    }


buttonConfig : ButtonConfig msg
buttonConfig =
    { raised = False
    , unelevated = False
    , outlined = False
    , dense = False
    , disabled = False
    , icon = ""
    , label = ""
    , ripple = False
    , onClick = Nothing
    , additionalAttributes = []
    }


button : ButtonConfig msg -> String -> Html msg
button config_ label =
    let
        config =
            { config_ | label = label }

        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-button"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "raised") (bool config.raised)
            , Maybe.map (Html.attribute "unelevated") (bool config.unelevated)
            , Maybe.map (Html.attribute "outlined") (bool config.outlined)
            , Maybe.map (Html.attribute "dense") (bool config.dense)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "icon" config.icon)
            , Just (Html.attribute "label" config.label)

            -- TODO: config.ripple
            , Maybe.map Html.onClick config.onClick
            ]
            ++ config.additionalAttributes
        )
        []
