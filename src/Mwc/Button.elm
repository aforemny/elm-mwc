module Mwc.Button exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html


type alias ButtonConfig msg =
    { variant : ButtonVariant
    , dense : Bool
    , disabled : Bool
    , icon : String
    , ripple : Bool
    , onClick : Maybe msg
    , additionalAttributes : List (Html.Attribute msg)
    , label : String
    }


type ButtonVariant
    = Text
    | Raised
    | Unelevated
    | Outlined


buttonConfig : ButtonConfig msg
buttonConfig =
    { variant = Text
    , dense = False
    , disabled = False
    , icon = ""
    , ripple = False
    , onClick = Nothing
    , additionalAttributes = []
    , label = ""
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
            [ Maybe.map (Html.attribute "raised") (bool (config.variant == Raised))
            , Maybe.map (Html.attribute "unelevated") (bool (config.variant == Unelevated))
            , Maybe.map (Html.attribute "outlined") (bool (config.variant == Outlined))
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
