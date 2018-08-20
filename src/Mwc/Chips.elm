module Mwc.Chips exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias ChipConfig msg =
    { leadingIcon : Maybe String
    , trailingIcon : Maybe String
    , active : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


chip : ChipConfig msg -> String -> Html msg
chip config label =
    Html.node "mwc-chip"
        ([ stringProp "leadingIcon" (Maybe.withDefault "" config.leadingIcon)
         , stringProp "trailingIcon" (Maybe.withDefault "" config.trailingIcon)
         , boolProp "active" config.active
         , stringProp "label" label
         ]
            ++ config.additionalAttributes
        )
        []


chipConfig : ChipConfig msg
chipConfig =
    { leadingIcon = Nothing
    , trailingIcon = Nothing
    , active = False
    , additionalAttributes = []
    }


type alias ChipSetConfig msg =
    { type_ : ChipSetType
    , additionalAttributes : List (Html.Attribute msg)
    }


chipSet : ChipSetConfig msg -> List (Html msg) -> Html msg
chipSet config =
    let
        type_ (ChipSetType v) =
            v
    in
    Html.node "mwc-chip-set"
        (stringProp "type" (type_ config.type_) :: config.additionalAttributes)


type ChipSetType
    = ChipSetType String


chipSetConfig : ChipSetConfig msg
chipSetConfig =
    { type_ = ChipSetType ""
    , additionalAttributes = []
    }


default : ChipSetType
default =
    ChipSetType ""


choice : ChipSetType
choice =
    ChipSetType "choice"


filter : ChipSetType
filter =
    ChipSetType "filter"
