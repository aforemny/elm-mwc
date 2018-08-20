module Mwc.Attributes exposing (..)

import Html exposing (Attribute)
import Html.Attributes exposing (property)
import Json.Encode as Encode


stringProp : String -> String -> Attribute msg
stringProp name value =
    property name (Encode.string value)


boolProp : String -> Bool -> Attribute msg
boolProp name value =
    property name (Encode.bool value)


floatProp : String -> Float -> Attribute msg
floatProp name value =
    property name (Encode.float value)


intProp : String -> Int -> Attribute msg
intProp name value =
    property name (Encode.int value)
