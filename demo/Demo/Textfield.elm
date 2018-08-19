module Demo.Textfield exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Textfield as Textfield exposing (TextfieldConfig, textfield, textfieldConfig)
import Time exposing (Time)


type alias Model =
    {}


defaultModel : Model
defaultModel =
    {}


type Msg
    = Input String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input input ->
            let
                _ =
                    Debug.log "input" input
            in
            ( model, Cmd.none )


style : String
style =
    """
  """


view : Model -> Html Msg
view model =
    Html.node "main"
        []
        [ demoGroupSpaced textfieldConfig
        , Html.h4 [] [ text "box" ]
        , demoGroupSpaced
            { textfieldConfig
                | box = True
                , onInput = Just Input
            }
        , Html.h4 [] [ text "box - required" ]
        , demoGroupSpaced
            { textfieldConfig
                | box = True
                , required = True
                , onInput = Just Input
            }
        , Html.h4 [] [ text "outlined" ]
        , demoGroupSpaced
            { textfieldConfig
                | outlined = True
                , onInput = Just Input
            }
        , Html.h4 [] [ text "outlined - required - email - helperText" ]
        , demoGroupSpaced
            { textfieldConfig
                | outlined = True
                , required = True
                , type_ = "email"
                , helperText = "Make sure to include an @"
                , onInput = Just Input
            }
        , Html.h4 [] [ text "box - disabled" ]
        , demoGroupSpaced
            { textfieldConfig
                | box = True
                , disabled = True
                , onInput = Just Input
            }
        , Html.h4 [] [ text "fullWidth" ]
        , demoGroupSpaced
            { textfieldConfig
                | fullWidth = True
                , onInput = Just Input
            }
        ]


demoGroupSpaced : TextfieldConfig msg -> Html msg
demoGroupSpaced textfieldConfig =
    Html.div
        [ Html.class "demo-group-spaced"
        ]
        [ textfield textfieldConfig
        , textfield
            { textfieldConfig
                | box = True
                , label = "Say something..."
            }
        , textfield
            { textfieldConfig
                | box = True
                , label = "Say something..."
                , value = "Hi"
            }
        , textfield
            { textfieldConfig
                | box = True
                , label = "Say something..."
                , value = "Hi"
                , icon = "event"
            }
        , textfield
            { textfieldConfig
                | box = True
                , label = "Say something..."
                , value = "Hi"
                , icon = "mail"
                , iconTrailing = True
            }
        ]
