module Mwc.Chips exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias ChipConfig msg =
    { leadingIcon : Maybe String
    , trailingIcon : Maybe String
    , active : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


chip : ChipConfig msg -> String -> Html msg
chip config label =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-chip"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "leadingIcon") config.leadingIcon
            , Maybe.map (Html.attribute "trailingIcon") config.trailingIcon
            , Maybe.map (Html.attribute "active") (bool config.active)
            , Just (Html.attribute "label" label)
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
        (Html.attribute "type" (type_ config.type_) :: config.additionalAttributes)


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
