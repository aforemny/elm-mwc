module Demo.Icon exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Icon as Mwc exposing (icon, iconConfig)


view =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Icon" ]
        , Html.div
            [ Html.class "demo-group" ]
            [ icon iconConfig "sentiment_very_dissatisfied"
            , icon iconConfig "sentiment_dissatisfied"
            , icon iconConfig "sentiment_neutral"
            , icon iconConfig "sentiment_satisfied"
            , icon iconConfig "sentiment_very_satisfied"
            ]
        , Html.h3 [] [ text "Color and size" ]
        , Html.div
            [ Html.class "demo-group color-size" ]
            [ icon iconConfig "all_out"
            , icon iconConfig "accessibility"
            , icon iconConfig "exit_to_app"
            , icon iconConfig "camera"
            ]
        ]
