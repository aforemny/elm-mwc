module Mwc.Ripple exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias Config msg =
    { primary : Bool
    , secondary : Bool
    , unbounded : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


rippleConfig : Config msg
rippleConfig =
    { primary = False
    , secondary = False
    , unbounded = False
    , additionalAttributes = []
    }


ripple : Config msg -> Html msg
ripple config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-ripple"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "primary") (bool config.primary)
            , Maybe.map (Html.attribute "accent") (bool config.secondary)
            , Maybe.map (Html.attribute "unbounded") (bool config.unbounded)
            ]
            ++ config.additionalAttributes
        )
        []
