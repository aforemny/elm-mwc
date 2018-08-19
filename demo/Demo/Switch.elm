module Demo.Switch exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html
import Mwc.Switch exposing (switch, switchConfig)


type Msg
    = ToggleSwitch1
    | ToggleSwitch2


type alias Model =
    { toggle1 : Bool
    , toggle2 : Bool
    }


defaultModel =
    { toggle1 = False
    , toggle2 = True
    }


init msg model =
    ( model, Cmd.none )


subscriptions model =
    Sub.none


update msg model =
    case msg of
        ToggleSwitch1 ->
            ( { model | toggle1 = not model.toggle1 }, Cmd.none )

        ToggleSwitch2 ->
            ( { model | toggle2 = not model.toggle2 }, Cmd.none )


style : String
style =
    """
    """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Switch" ]
        , Html.div
            [ Html.class "group"
            ]
            [ switch
                { switchConfig
                    | checked = model.toggle1
                    , onToggle = Just ToggleSwitch1
                }
            , switch
                { switchConfig
                    | checked = model.toggle2
                    , onToggle = Just ToggleSwitch2
                    , additionalAttributes = [ Html.class "special" ]
                }
            ]
        ]
