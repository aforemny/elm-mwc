module Demo.Radio exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Radio exposing (radio, radioConfig)


view =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Radio" ]
        , Html.div
            [ Html.class "group"
            ]
            [ radio radioConfig
            , radio radioConfig
            , radio
                { radioConfig
                    | checked = True
                    , additionalAttributes = [ Html.class "special" ]
                }
            ]
        , Html.div
            [ Html.class "group"
            ]
            [ radio
                { radioConfig
                    | name = "1"
                    , checked = True
                    , additionalAttributes = [ Html.class "special" ]
                }
            , radio { radioConfig | name = "1" }
            , radio { radioConfig | name = "1" }
            ]
        ]
