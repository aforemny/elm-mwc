module Mwc.Checkbox exposing (CheckboxConfig, State(..), checkbox, checkboxConfig)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias CheckboxConfig msg =
    { state : State
    , disabled : Bool
    , value : String
    , additionalAttributes : List (Html.Attribute msg)
    }


type State
    = Unchecked
    | Checked
    | Indeterminate


checkboxConfig : CheckboxConfig msg
checkboxConfig =
    { state = Unchecked
    , disabled = False
    , value = ""
    , additionalAttributes = []
    }


checkbox : CheckboxConfig msg -> Html msg
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
            [ case config.state of
                Unchecked ->
                    Maybe.map (Html.attribute "checked") (bool False)

                Checked ->
                    Maybe.map (Html.attribute "checked") (bool True)

                Indeterminate ->
                    Maybe.map (Html.attribute "indeterminate") (bool True)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "value" config.value)
            ]
            ++ config.additionalAttributes
        )
        []
