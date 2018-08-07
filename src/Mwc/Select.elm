module Mwc.Select exposing (..)

import Html exposing (Html)
import Html.Attributes as Html


type alias SelectConfig msg =
    { label : String
    , disabled : Bool
    , box : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


select : SelectConfig msg -> List (Html msg) -> Html msg
select config =
  let
      bool v =
        if v then Just "" else Nothing
  in
    Html.node "mwc-select"
        (List.filterMap identity
            [ Just (Html.attribute "label" config.label)
            , Maybe.map (Html.attribute "disabled") (bool config.disabled)
            , Maybe.map (Html.attribute "box") (bool config.box)
            ]
            ++ config.additionalAttributes
        )


selectConfig : SelectConfig msg
selectConfig =
    { label = ""
    , disabled = False
    , box = False
    , additionalAttributes = []
    }
