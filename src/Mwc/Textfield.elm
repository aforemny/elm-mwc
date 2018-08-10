module Mwc.Textfield exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html


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
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-textfield"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "required") (bool config.required)
            , Just (Html.attribute "value" config.value)
            , Just (Html.attribute "label" config.label)
            , Just (Html.attribute "icon" config.icon)
            , Maybe.map (Html.attribute "iconTrailing") (bool config.iconTrailing)
            , Just (Html.attribute "helperText" config.helperText)
            , Maybe.map (Html.attribute "box") (bool config.box)
            , Maybe.map (Html.attribute "outlined") (bool config.outlined)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Maybe.map (Html.attribute "fullWidth") (bool config.fullWidth)
            , Just (Html.attribute "placeholder" config.placeholder)
            , Just (Html.attribute "type" config.type_)
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