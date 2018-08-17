module Mwc.LinearProgress exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


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
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-linear-progress"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "determinate")
                (case config.variant of
                    Determinate determinate ->
                        bool True

                    Buffered determinate _ ->
                        bool True

                    _ ->
                        bool False
                )
            , Maybe.map (Html.attribute "progress")
                (case config.variant of
                    Determinate determinate ->
                        Just (toString determinate)

                    Buffered determinate _ ->
                        Just (toString determinate)

                    _ ->
                        Nothing
                )
            , Maybe.map (Html.attribute "buffer")
                (case config.variant of
                    Buffered _ buffered ->
                        Just (toString buffered)

                    _ ->
                        Nothing
                )
            , Maybe.map (Html.attribute "reverse") (bool config.reverse)
            , Maybe.map (Html.attribute "closed") (bool config.closed)
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
