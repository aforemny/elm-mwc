module Demo.Icon exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Icon as Mwc exposing (icon, iconConfig)


type alias Model =
    {}


defaultModel : Model
defaultModel =
    {}


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


style : String
style =
    """
    .color-size {
      color: tomato;
      --mdc-icon-size: 4em;
    }
    """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Icon" ]
        , Html.div
            [ Html.class "demo-group" ]
            [ icon iconConfig "sentiment_very_dissatisfied"
            , icon iconConfig "sentiment_dissatisfied"
            , icon iconConfig "sentiment_neutral"
            , icon iconConfig "sentiment_satisfied"
            , icon iconConfig "sentiment_very_satisfied"
            ]
        , Html.h3 [] [ text "Color and size" ]
        , Html.div
            [ Html.class "demo-group color-size" ]
            [ icon iconConfig "all_out"
            , icon iconConfig "accessibility"
            , icon iconConfig "exit_to_app"
            , icon iconConfig "camera"
            ]
        ]
