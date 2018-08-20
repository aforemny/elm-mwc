module Mwc.Ripple exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp)


type alias RippleConfig msg =
    { primary : Bool
    , secondary : Bool
    , unbounded : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


rippleConfig : RippleConfig msg
rippleConfig =
    { primary = False
    , secondary = False
    , unbounded = False
    , additionalAttributes = []
    }


ripple : RippleConfig msg -> Html msg
ripple config =
    Html.node "mwc-ripple"
        ([ boolProp "primary" config.primary
         , boolProp "accent" config.secondary
         , boolProp "unbounded" config.unbounded
         ]
            ++ config.additionalAttributes
        )
        []
