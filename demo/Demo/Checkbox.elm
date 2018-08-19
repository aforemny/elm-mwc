module Demo.Checkbox exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Checkbox as Mwc exposing (checkbox, checkboxConfig)


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


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ Html.h3 [] [ text "Checkbox" ]
        , checkbox checkboxConfig
        , checkbox
            { checkboxConfig
                | state = Mwc.Checked
            }
        , checkbox
            { checkboxConfig
                | state = Mwc.Indeterminate
            }
        , checkbox
            { checkboxConfig
                | state = Mwc.Indeterminate
                , additionalAttributes = [ Html.class "special" ]
            }
        , checkbox { checkboxConfig | disabled = True }
        ]
