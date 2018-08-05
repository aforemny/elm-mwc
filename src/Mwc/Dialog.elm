module Mwc.Dialog exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias DialogConfig msg =
    { headerLabel : String
    , acceptLabel : String
    , declineLabel : String
    , scrollable : Bool
    , opened : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


dialog : DialogConfig msg -> List (Html msg) -> Html msg
dialog config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-dialog"
        (List.filterMap identity
            [ Just (Html.attribute "headerLabel" config.headerLabel)
            , Just (Html.attribute "acceptLabel" config.acceptLabel)
            , Just (Html.attribute "declineLabel" config.declineLabel)
            , Maybe.map (Html.attribute "scrollable") (bool config.scrollable)
            , Maybe.map (Html.attribute "opened") (bool config.opened)
            ]
            ++ config.additionalAttributes
        )


dialogConfig : DialogConfig msg
dialogConfig =
    { headerLabel = ""
    , acceptLabel = "OK"
    , declineLabel = "Cancel"
    , scrollable = False
    , opened = False
    , additionalAttributes = []
    }
