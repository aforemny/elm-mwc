module Demo.Snackbar exposing (..)

import Demo.Ports as Ports
import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Button as Button exposing (button, buttonConfig)
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
    Snackbar.snack
        { message = "Hi there snack 1"
        , actionText = "Go"
        }


snack2 : Snack
snack2 =
    Snackbar.snack
        { message = "Hi there snack 2"
        , actionText = "Happy"
        }
        |> Snackbar.setDismissesOnAction True
        |> Snackbar.setTimeout (5 * Time.second)


snack3 : Snack
snack3 =
    Snackbar.snack
        { message =
            """
              Hi there snack 3! This is a really long message that will probably
              wrap.
            """
        , actionText = "Wow"
        }
        |> Snackbar.setTimeout (5 * Time.second)
        |> Snackbar.setMultiline True
        |> Snackbar.setActionOnBottom True


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
                    | variant = Button.Raised
                    , onClick = Just Snack1Clicked
                    , additionalAttributes = [ Html.id "snack1" ]
                }
                "Snack 1"
            , button
                { buttonConfig
                    | variant = Button.Raised
                    , onClick = Just Snack2Clicked
                    , additionalAttributes = [ Html.id "snack2" ]
                }
                "Snack 2"
            , button
                { buttonConfig
                    | variant = Button.Raised
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
