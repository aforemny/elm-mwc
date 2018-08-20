module Mwc.FormField exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias FormFieldConfig msg =
    { label : String
    , alignEnd : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


formField : FormFieldConfig msg -> List (Html msg) -> Html msg
formField config =
    Html.node "mwc-formfield"
        ([ stringProp "label" config.label
         , boolProp "alignEnd" config.alignEnd
         ]
            ++ config.additionalAttributes
        )


formFieldConfig : FormFieldConfig msg
formFieldConfig =
    { label = ""
    , alignEnd = False
    , additionalAttributes = []
    }
