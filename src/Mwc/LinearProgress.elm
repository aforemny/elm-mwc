module Mwc.LinearProgress exposing (..)

import Html exposing (Html)
import Mwc.Attributes exposing (boolProp, floatProp, stringProp)


type alias LinearProgressConfig msg =
    { variant : LinearProgressVariant
    , reverse : Bool
    , closed : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


type LinearProgressVariant
    = Indeterminate
    | Determinate Float
    | Buffered Float Float


linearProgress : LinearProgressConfig msg -> Html msg
linearProgress config =
    Html.node "mwc-linear-progress"
        (List.filterMap identity
            [ Just (boolProp "determinate" (config.variant /= Indeterminate))
            , Maybe.map (floatProp "progress")
                (case config.variant of
                    Determinate determinate ->
                        Just determinate

                    Buffered determinate _ ->
                        Just determinate

                    _ ->
                        Nothing
                )
            , Maybe.map (floatProp "buffer")
                (case config.variant of
                    Buffered _ buffered ->
                        Just buffered

                    _ ->
                        Nothing
                )
            , Just (boolProp "reverse" config.reverse)
            , Just (boolProp "closed" config.closed)
            ]
            ++ config.additionalAttributes
        )
        []


linearProgressConfig : LinearProgressConfig msg
linearProgressConfig =
    { variant = Indeterminate
    , reverse = False
    , closed = False
    , additionalAttributes = []
    }
