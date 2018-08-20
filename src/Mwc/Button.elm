module Mwc.Button exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html
import Json.Encode as Encode
import Mwc.Attributes exposing (boolProp, stringProp)


type alias ButtonConfig msg =
    { variant : ButtonVariant
    , dense : Bool
    , disabled : Bool
    , icon : String
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
    , onClick = Nothing
    , additionalAttributes = []
    , label = ""
    }


button : ButtonConfig msg -> String -> Html msg
button config_ label =
    let
        config =
            { config_ | label = label }
    in
    Html.node "mwc-button"
        (List.filterMap identity
            [ Just (boolProp "raised" (config.variant == Raised))
            , Just (boolProp "unelevated" (config.variant == Unelevated))
            , Just (boolProp "outlined" (config.variant == Outlined))
            , Just (boolProp "dense" config.dense)
            , Just (boolProp "disabled" config.disabled)
            , Just (stringProp "icon" config.icon)
            , Just (stringProp "label" config.label)
            , Maybe.map Html.onClick config.onClick

            -- Note: As of now, this is not implemented in mwc-button yet:
            -- , Just (boolProp "ripple" config.ripple)
            ]
            ++ config.additionalAttributes
        )
        []
