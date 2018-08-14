module Demo.IconToggle exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html
import Mwc.IconToggle as Mwc exposing (iconToggle, iconToggleConfig)


type alias Model =
    { icon1 : Bool
    , icon2 : Bool
    , iconColor1 : Bool
    , iconColor2 : Bool
    }


defaultModel =
    { icon1 = False
    , icon2 = False
    , iconColor1 = False
    , iconColor2 = False
    }


type Msg
    = Toggle1Clicked
    | Toggle2Clicked
    | ToggleColor1Clicked
    | ToggleColor2Clicked


init msg model =
    ( model, Cmd.none )


subscriptions model =
    Sub.none


update msg model =
    case msg of
        Toggle1Clicked ->
            ( { model | icon1 = not model.icon1 }, Cmd.none )

        Toggle2Clicked ->
            ( model, Cmd.none )

        ToggleColor1Clicked ->
            ( { model | iconColor1 = not model.iconColor1 }, Cmd.none )

        ToggleColor2Clicked ->
            ( { model | iconColor2 = not model.iconColor2 }, Cmd.none )


style : String
style =
    """
    .color {
      --mdc-theme-text-primary-on-light: tomato;
    }
    """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Icon Toggle" ]
        , Html.div
            [ Html.class "demo-group" ]
            [ iconToggle
                { iconToggleConfig
                    | on = model.icon1
                    , icon = "sentiment_very_satisfied"
                    , offIcon = "sentiment_very_dissatisfied"
                    , additionalAttributes = [ Html.onClick Toggle1Clicked ]
                }
            , iconToggle
                { iconToggleConfig
                    | on = model.icon2
                    , icon = "sentiment_satisfied"
                    , offIcon = "sentiment_neutral"
                    , additionalAttributes = [ Html.onClick Toggle2Clicked ]
                }
            ]
        , Html.h3 [] [ text "Disabled" ]
        , Html.div
            [ Html.class "demo-group" ]
            [ iconToggle
                { iconToggleConfig
                    | on = False
                    , icon = "sentiment_satisfied"
                    , offIcon = "sentiment_very_dissatisfied"
                    , disabled = True
                }
            ]
        , Html.h3 [] [ text "Color" ]
        , Html.div
            [ Html.class "demo-group color" ]
            [ iconToggle
                { iconToggleConfig
                    | on = model.iconColor1
                    , icon = "all_out"
                    , offIcon = "accessibility"
                    , additionalAttributes = [ Html.onClick ToggleColor1Clicked ]
                }
            , iconToggle
                { iconToggleConfig
                    | on = model.iconColor2
                    , icon = "exit_to_app"
                    , offIcon = "camera"
                    , additionalAttributes = [ Html.onClick ToggleColor2Clicked ]
                }
            ]
        ]
