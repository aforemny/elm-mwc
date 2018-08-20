module Mwc.Textfield exposing (..)

import Html exposing (Html, text)
import Html.Events as Html
import Mwc.Attributes exposing (boolProp, stringProp)


type alias TextfieldConfig msg =
    { required : Bool
    , value : String
    , label : String
    , icon : String
    , iconTrailing : Bool
    , helperText : String
    , box : Bool
    , outlined : Bool
    , disabled : Bool
    , fullWidth : Bool
    , placeholder : String
    , type_ : String
    , onInput : Maybe (String -> msg)
    , additionalAttributes : List (Html.Attribute msg)
    }


textfield : TextfieldConfig msg -> Html msg
textfield config =
    Html.node "mwc-textfield"
        (List.filterMap identity
            [ Just (boolProp "required" config.required)
            , Just (stringProp "value" config.value)
            , Just (stringProp "label" config.label)
            , Just (stringProp "icon" config.icon)
            , Just (boolProp "iconTrailing" config.iconTrailing)
            , Just (stringProp "helperText" config.helperText)
            , Just (boolProp "box" config.box)
            , Just (boolProp "outlined" config.outlined)
            , Just (boolProp "disabled" config.disabled)
            , Just (boolProp "fullWidth" config.fullWidth)
            , Just (stringProp "placeholder" config.placeholder)
            , Just (stringProp "type" config.type_)
            , Maybe.map Html.onInput config.onInput
            ]
            ++ config.additionalAttributes
        )
        []


textfieldConfig : TextfieldConfig msg
textfieldConfig =
    { required = False
    , value = ""
    , label = ""
    , icon = ""
    , iconTrailing = False
    , helperText = ""
    , box = False
    , outlined = False
    , disabled = False
    , fullWidth = False
    , placeholder = ""
    , type_ = ""
    , onInput = Nothing
    , additionalAttributes = []
    }
