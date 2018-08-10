module Mwc.Checkbox exposing (..)

import Html.Attributes as Html
import Html exposing (Html, text)


type alias Config msg =
    { checked : Bool
    , indeterminate : Bool
    , disabled : Bool
    , value : String
    , additionalAttributes : List (Html.Attribute msg)
    }


checkboxConfig : Config msg
checkboxConfig =
    { checked = False
    , indeterminate = False
    , disabled = False
    , value = ""
    , additionalAttributes = []
    }


checkbox : Config msg -> Html msg
checkbox config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-checkbox"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "checked") (bool config.checked)
            , Maybe.map (Html.attribute "indeterminate") (bool config.indeterminate)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "value" config.value)
            ]
            ++ config.additionalAttributes
        )
        []
