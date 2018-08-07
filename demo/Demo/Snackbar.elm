module Demo.Snackbar exposing (..)

import Demo.Ports as Ports
import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Button exposing (button, buttonConfig)
import Mwc.Snackbar as Snackbar exposing (Snack, snackbar, snackbarConfig)
import Time exposing (Time)


type Msg
    = Snack1Clicked
    | Snack2Clicked
    | Snack3Clicked


init msg model =
    ( model, Cmd.none )


subscriptions model =
    Sub.none


update msg model =
    case msg of
        Snack1Clicked ->
            ( model, Ports.snackbar (Snackbar.show "snack" snack1) )

        Snack2Clicked ->
            ( model, Ports.snackbar (Snackbar.show "snack" snack2) )

        Snack3Clicked ->
            ( model, Ports.snackbar (Snackbar.show "snack" snack3) )


type alias Model =
    {}


defaultModel =
    {}


snack1 : Snack
snack1 =
    { dismissesOnAction = True
    , message = ""
    , actionText = ""
    , timeout = 0
    , multiline = False
    , actionOnBottom = False
    }


snack2 : Snack
snack2 =
    { dismissesOnAction = True
    , message = "Hi there snack 2"
    , actionText = "Happy"
    , timeout = 5 * Time.second
    , multiline = False
    , actionOnBottom = False
    }


snack3 : Snack
snack3 =
    { dismissesOnAction = False
    , message = "Hi there snack 3! This is a really long message that will probably wrap."
    , actionText = "Wow"
    , multiline = True
    , actionOnBottom = True
    , timeout = 5 * Time.second
    }


style : String
style =
    """
  """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.div
            [ Html.class "demo-group" ]
            [ button
                { buttonConfig
                    | raised = True
                    , ripple = True
                    , onClick = Just Snack1Clicked
                    , additionalAttributes = [ Html.id "snack1" ]
                }
                "Snack 1"
            , button
                { buttonConfig
                    | raised = True
                    , ripple = True
                    , onClick = Just Snack2Clicked
                    , additionalAttributes = [ Html.id "snack2" ]
                }
                "Snack 2"
            , button
                { buttonConfig
                    | raised = True
                    , ripple = True
                    , onClick = Just Snack3Clicked
                    , additionalAttributes = [ Html.id "snack3" ]
                }
                "Snack 3"
            ]
        , snackbar
            { snackbarConfig
                | message = "Hi there snack 1!"
                , actionText = "Go"
                , additionalAttributes = [ Html.id "snack" ]
            }
        ]
