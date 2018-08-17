module Demo.Button exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Button as Button exposing (button, buttonConfig)


style =
    """
    .light {
      --mdc-theme-on-primary: black;
      --mdc-theme-primary: white;
      --mdc-theme-on-secondary: black;
      --mdc-theme-secondary: white;
    }

    .pink {
      --mdc-theme-on-primary: white;
      --mdc-theme-primary: #e9437a;
      --mdc-theme-on-secondary: white;
      --mdc-theme-secondary: #e9437a;
    }

    .wide {
      width: 250px;
    }
  """


view =
    Html.node "main"
        []
        [ Html.h4 []
            [ text "labeled" ]
        , Html.div
            [ Html.class "demo-group-spaced"
            ]
            [ button
                buttonConfig
                "Normal"
            , button
                { buttonConfig
                    | variant = Button.Raised
                    , additionalAttributes = [ Html.class "light" ]
                }
                "Raised"
            , button
                { buttonConfig
                    | variant = Button.Unelevated
                }
                "Unelevated"
            , button
                { buttonConfig
                    | dense = True
                    , additionalAttributes = [ Html.class "pink" ]
                }
                "Dense"
            , button
                { buttonConfig
                    | variant = Button.Raised
                    , additionalAttributes = [ Html.class "pink white" ]
                }
                "Wide"
            , button
                { buttonConfig
                    | disabled = True
                }
                "Disabled"
            ]
        ]
