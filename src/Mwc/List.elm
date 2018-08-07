module Mwc.List exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


type alias ItemConfig msg =
    { label : String
    , icon : String
    , disabled : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


item : ItemConfig msg -> Html msg
item config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-list-item"
        (List.filterMap identity
            [ Just (Html.attribute "label" config.label)
            , Just (Html.attribute "icon" config.icon)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
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
