module Demo.Ripple exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Radio exposing (radio, radioConfig)
import Mwc.Ripple exposing (ripple, rippleConfig)


type alias Model =
    {}


defaultModel : Model
defaultModel =
    {}


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


style : String
style =
    """
    .box {
      height: 128px;
      width: 128px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      padding: 8px;
    }
    .box-border {
      border: 1px solid gray;
    }
    """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Ripple" ]
        , Html.div
            [ Html.class "group"
            ]
            [ Html.div
                [ Html.class "box"
                , Html.class "box-border"
                ]
                [ text "Primary"
                , ripple { rippleConfig | primary = True }
                ]
            , Html.div
                [ Html.class "box"
                , Html.class "box-border"
                ]
                [ text "Accent"
                , ripple { rippleConfig | secondary = True }
                ]
            , Html.div
                [ Html.class "box"
                , Html.class "box-border"
                ]
                [ Html.input
                    [ Html.placeholder "Say something..."
                    , Html.style
                        [ ( "width", "100%" ) ]
                    ]
                    []
                , ripple rippleConfig
                ]
            , Html.div
                [ Html.class "box"
                ]
                [ text "Unbounded"
                , ripple { rippleConfig | unbounded = True }
                ]
            ]
        ]
