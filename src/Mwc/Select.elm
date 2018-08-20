module Mwc.Select exposing (..)

import Html exposing (Html)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias SelectConfig msg =
    { label : String
    , disabled : Bool
    , box : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


select : SelectConfig msg -> List (Html msg) -> Html msg
select config =
    Html.node "mwc-select"
        ([ stringProp "label" config.label
         , boolProp "disabled" config.disabled
         , boolProp "box" config.box
         ]
            ++ config.additionalAttributes
        )


selectConfig : SelectConfig msg
selectConfig =
    { label = ""
    , disabled = False
    , box = False
    , additionalAttributes = []
    }
