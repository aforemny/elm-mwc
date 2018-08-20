module Mwc.Fab exposing (..)

import Html exposing (Html, text)
import Mwc.Attributes exposing (boolProp, stringProp)


type alias FabConfig msg =
    { mini : Bool
    , exited : Bool
    , disabled : Bool
    , icon : String
    , label : String
    , additionalAttributes : List (Html.Attribute msg)
    }


fabConfig : FabConfig msg
fabConfig =
    { mini = False
    , exited = False
    , disabled = False
    , icon = ""
    , label = ""
    , additionalAttributes = []
    }


fab : FabConfig msg -> String -> Html msg
fab config_ icon =
    let
        config =
            { config_ | icon = icon }
    in
    Html.node "mwc-fab"
        ([ boolProp "mini" config.mini
         , boolProp "exited" config.exited
         , boolProp "disabled" config.disabled
         , stringProp "icon" config.icon
         , stringProp "label" config.label
         ]
            ++ config.additionalAttributes
        )
        []
