module Mwc.Slider exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


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
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-slider"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "step" (toString config.step))
            , Just (Html.attribute "min" (toString config.min))
            , Just (Html.attribute "max" (toString config.max))
            , Just (Html.attribute "value" (toString config.value))
            , Maybe.map (Html.attribute "discrete") (bool config.discrete)
            , Maybe.map (Html.attribute "markers") (bool config.markers)
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
