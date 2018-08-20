module Mwc.Radio exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias RadioConfig msg =
    { checked : Bool
    , disabled : Bool
    , value : String
    , name : String
    , additionalAttributes : List (Html.Attribute msg)
    }


radioConfig : RadioConfig msg
radioConfig =
    { checked = False
    , disabled = False
    , value = ""
    , name = ""
    , additionalAttributes = []
    }


radio : RadioConfig msg -> Html msg
radio config =
    Html.node "mwc-radio"
        ([ boolProp "checked" config.checked
         , boolProp "disabled" config.disabled
         , stringProp "name" config.name
         , stringProp "value" config.value
         ]
            ++ config.additionalAttributes
        )
        []
