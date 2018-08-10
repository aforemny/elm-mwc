module Mwc.Icon exposing (..)

import Html exposing (Html, text)


type alias IconConfig msg =
    { additionalAttributes : List (Html.Attribute msg)
    }


iconConfig : IconConfig msg
iconConfig =
    { additionalAttributes = []
    }


icon : IconConfig msg -> String -> Html msg
icon config icon =
    Html.node "mwc-icon" config.additionalAttributes [ text icon ]
