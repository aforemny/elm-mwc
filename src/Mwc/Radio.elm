module Mwc.Radio exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias Config msg =
    { checked : Bool
    , disabled : Bool
    , value : String
    , name : String
    , additionalAttributes : List (Html.Attribute msg)
    }


radioConfig : Config msg
radioConfig =
    { checked = False
    , disabled = False
    , value = ""
    , name = ""
    , additionalAttributes = []
    }


radio : Config msg -> Html msg
radio config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-radio"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "checked") (bool config.checked)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "name" config.name)
            , Just (Html.attribute "value" config.value)
            ]
            ++ config.additionalAttributes
        )
        []
