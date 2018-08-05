module Mwc.FormField exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias FormFieldConfig msg =
    { label : String
    , alignEnd : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


formField : FormFieldConfig msg -> List (Html msg) -> Html msg
formField config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-formfield"
        (List.filterMap identity
            [ Just (Html.attribute "label" config.label)
            , Maybe.map (Html.attribute "alignEnd") (bool config.alignEnd)
            ]
            ++ config.additionalAttributes
        )


formFieldConfig : FormFieldConfig msg
formFieldConfig =
    { label = ""
    , alignEnd = False
    , additionalAttributes = []
    }
