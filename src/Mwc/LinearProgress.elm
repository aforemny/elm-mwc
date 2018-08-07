module Mwc.LinearProgress exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


type alias LinearProgressConfig msg =
    { determinate : Bool
    , progress : Float
    , buffer : Float
    , reverse : Bool
    , closed : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


linearProgress : LinearProgressConfig msg -> Html msg
linearProgress config =
    let
        bool v =
            if v then
                Just ""
            else
                Nothing
    in
    Html.node "mwc-linear-progress"
        (List.filterMap identity
            [ Maybe.map (Html.attribute "determinate") (bool config.determinate)
            , Just (Html.attribute "progress" (toString config.progress))
            , Just (Html.attribute "buffer" (toString config.buffer))
            , Maybe.map (Html.attribute "reverse") (bool config.reverse)
            , Maybe.map (Html.attribute "closed") (bool config.closed)
            ]
            ++ config.additionalAttributes
        )
        []


linearProgressConfig : LinearProgressConfig msg
linearProgressConfig =
    { determinate = False
    , progress = 0
    , buffer = 0
    , reverse = False
    , closed = False
    , additionalAttributes = []
    }
