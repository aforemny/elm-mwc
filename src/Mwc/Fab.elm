module Mwc.Fab exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias Config msg =
    { mini : Bool
    , exited : Bool
    , disabled : Bool
    , icon : String
    , label : String
    , additionalAttributes : List (Html.Attribute msg)
    }


fabConfig : Config msg
fabConfig =
    { mini = False
    , exited = False
    , disabled = False
    , icon = ""
    , label = ""
    , additionalAttributes = []
    }


fab : Config msg -> String -> Html msg
fab config_ icon =
    let
        config =
            { config_ | icon = icon }

        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-fab"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "mini") (bool config.mini)
            , Maybe.map (Html.attribute "exited") (bool config.exited)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Just (Html.attribute "icon" config.icon)
            , Just (Html.attribute "label" config.label)
            ]
            ++ config.additionalAttributes
        )
        []
