module Mwc.List exposing (..)

import Html exposing (Html)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias ItemConfig msg =
    { label : String
    , icon : String
    , disabled : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


item : ItemConfig msg -> Html msg
item config =
    Html.node "mwc-list-item"
        ([ stringProp "label" config.label
         , stringProp "icon" config.icon
         , boolProp "disabled" config.disabled
         ]
            ++ config.additionalAttributes
        )
        []


itemConfig : ItemConfig msg
itemConfig =
    { label = ""
    , icon = ""
    , disabled = False
    , additionalAttributes = []
    }


type alias ItemSeparatorConfig msg =
    { additionalAttributes : List (Html.Attribute msg)
    }


itemSeparator : ItemSeparatorConfig msg -> Html msg
itemSeparator config =
    Html.node "mwc-list-item-separator"
        config.additionalAttributes
        []


itemSeparatorConfig : ItemSeparatorConfig msg
itemSeparatorConfig =
    { additionalAttributes = []
    }
