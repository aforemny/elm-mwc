module Mwc.Menu exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


type alias MenuConfig msg =
    { additionalAttributes : List (Html.Attribute msg)
    }


menu : MenuConfig msg -> List (Html msg) -> Html msg
menu config =
    Html.node "mwc-menu" config.additionalAttributes


menuConfig : MenuConfig msg
menuConfig =
    { additionalAttributes = []
    }
