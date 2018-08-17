module Demo.LinearProgress exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html
import Mwc.Button as Button exposing (button, buttonConfig)
import Mwc.LinearProgress as LinearProgress exposing (linearProgress, linearProgressConfig)


type alias Model =
    { closed : Bool
    }


defaultModel =
    { closed = False
    }


type Msg
    = ToggleButtonClicked


init msg model =
    ( model, Cmd.none )


subscriptions model =
    Sub.none


update msg model =
    case msg of
        ToggleButtonClicked ->
            ( { model | closed = not model.closed }, Cmd.none )


style : String
style =
    """
    mwc-linear-progress {
      width: 50%;
      margin: auto;
    }

    .demo-progress-bar {
      --mdc-theme-primary: red;
      --mdc-theme-secondary: orange;
      --mdc-linear-progress-buffering-dots-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffcdd2'/%3E%3C/svg%3E")
    }
    """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ button
            { buttonConfig
                | variant = Button.Raised
                , additionalAttributes = [ Html.onClick ToggleButtonClicked ]
            }
            "Toggle"
        , Html.div
            []
            [ linearProgress
                { linearProgressConfig
                    | closed = model.closed
                }
            ]
        , Html.h3 [] [ text "linear-progress: reverse" ]
        , Html.div
            []
            [ linearProgress
                { linearProgressConfig
                    | reverse = True
                    , additionalAttributes = [ Html.class "demo-progress-bar" ]
                }
            ]
        , Html.h3 [] [ text "linear-progress: determinate" ]
        , Html.div
            []
            [ linearProgress
                { linearProgressConfig
                    | variant = LinearProgress.Buffered 0.5 1
                }
            ]
        , Html.h3 [] [ text "linear-progress: determinate buffer" ]
        , Html.div
            []
            [ linearProgress
                { linearProgressConfig
                    | variant = LinearProgress.Buffered 0.3 0.7
                    , additionalAttributes = [ Html.class "demo-progress-bar" ]
                }
            ]
        , Html.h3 [] [ text "linear-progress: determinate buffer reverse" ]
        , Html.div
            []
            [ linearProgress
                { linearProgressConfig
                    | variant = LinearProgress.Buffered 0.2 0.6
                    , reverse = True
                }
            ]
        ]
