module Mwc.Checkbox exposing (CheckboxConfig, State(..), checkbox, checkboxConfig)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


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
    Html.node "mwc-checkbox"
        ([ case config.state of
            Unchecked ->
                boolProp "checked" False

            Checked ->
                boolProp "checked" True

            Indeterminate ->
                boolProp "indeterminate" True
         , boolProp "disabled" config.disabled
         , stringProp "value" config.value
         ]
            ++ config.additionalAttributes
        )
        []
