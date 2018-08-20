module Mwc.Slider exposing (..)

import Html exposing (Html)
import Mwc.Attributes exposing (boolProp, floatProp, stringProp)


type alias SliderConfig msg =
    { disabled : Bool
    , step : Float
    , min : Float
    , max : Float
    , value : Float
    , discrete : Bool
    , markers : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


slider : SliderConfig msg -> Html msg
slider config =
    Html.node "mwc-slider"
        ([ boolProp "disabled" config.disabled
         , floatProp "step" config.step
         , floatProp "min" config.min
         , floatProp "max" config.max
         , floatProp "value" config.value
         , boolProp "discrete" config.discrete
         , boolProp "markers" config.markers
         ]
            ++ config.additionalAttributes
        )
        []


sliderConfig : SliderConfig msg
sliderConfig =
    { disabled = False
    , step = 0
    , min = 0
    , max = 10
    , value = 0
    , discrete = False
    , markers = False
    , additionalAttributes = []
    }
