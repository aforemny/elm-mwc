module Mwc.Icon exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias Config msg =
    { icon : String
    , additionalAttributes : List (Html.Attribute msg)
    }


iconConfig : Config msg
iconConfig =
    { icon = ""
    , additionalAttributes = []
    }


icon : Config msg -> String -> Html msg
icon config_ icon =
    let
        config =
            { config_ | icon = icon }
    in
    Html.node "mwc-icon" config.additionalAttributes [ text icon ]
