module Mwc.Dialog exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


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
    Html.node "mwc-dialog"
        ([ stringProp "headerLabel" config.headerLabel
         , stringProp "acceptLabel" config.acceptLabel
         , stringProp "declineLabel" config.declineLabel
         , boolProp "scrollable" config.scrollable
         , boolProp "opened" config.opened
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
