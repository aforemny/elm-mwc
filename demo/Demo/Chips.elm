module Demo.Chips exposing (..)

import Html exposing (Html, text)
import Mwc.Chips as Mwc exposing (chip, chipConfig, chipSet, chipSetConfig)


view =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Chips" ]
        , chip chipConfig "example"
        ]
