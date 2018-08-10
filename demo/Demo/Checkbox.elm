module Demo.Checkbox exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Checkbox as Mwc exposing (checkbox, checkboxConfig)


view =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Checkbox" ]
        , checkbox checkboxConfig
        , checkbox { checkboxConfig | checked = True }
        , checkbox
            { checkboxConfig
                | indeterminate = True
            }
        , checkbox
            { checkboxConfig
                | indeterminate = True
                , additionalAttributes = [ Html.class "special" ]
            }
        , checkbox { checkboxConfig | disabled = True }
        ]
