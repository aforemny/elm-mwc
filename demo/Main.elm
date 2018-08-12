module Main exposing (..)

import Demo.Button
import Demo.Card
import Demo.Checkbox
import Demo.Chips
import Demo.Fab
import Demo.Icon
import Demo.IconToggle
import Demo.LinearProgress
import Demo.Snackbar
import Demo.Textfield
import Html exposing (Html, text)
import Html.Attributes
import Html.Events as Html
import Mwc.Button exposing (button, buttonConfig)
import Mwc.Card as Card exposing (card, cardConfig)
import Mwc.Checkbox exposing (checkbox, checkboxConfig)
import Mwc.Chips exposing (chip, chipConfig, chipSet, chipSetConfig)
import Mwc.Dialog exposing (dialog, dialogConfig)
import Mwc.Fab exposing (fab, fabConfig)
import Mwc.FormField exposing (formField, formFieldConfig)
import Mwc.Icon exposing (icon, iconConfig)
import Mwc.List exposing (item, itemConfig, itemSeparator, itemSeparatorConfig)
import Mwc.Menu exposing (menu, menuConfig)
import Mwc.Radio exposing (radio, radioConfig)
import Mwc.Ripple exposing (ripple, rippleConfig)
import Mwc.Select exposing (select, selectConfig)
import Mwc.Slider exposing (slider, sliderConfig)
import Mwc.Snackbar exposing (snackbar, snackbarConfig)
import Mwc.Switch exposing (switch, switchConfig)
import Mwc.Tabs exposing (tab, tabBar, tabBarConfig, tabConfig)


defaultModel =
    { button = ()
    , card = ()
    , snackbar = Demo.Snackbar.Model
    , textfield = Demo.Textfield.Model
    , iconToggle = Demo.IconToggle.defaultModel
    , linearProgress = Demo.LinearProgress.defaultModel
    }


type Msg
    = ButtonMsg ()
    | CheckboxMsg ()
    | FabMsg ()
    | CardMsg ()
    | IconMsg ()
    | IconToggleMsg Demo.IconToggle.Msg
    | SnackbarMsg Demo.Snackbar.Msg
    | TextfieldMsg Demo.Textfield.Msg
    | LinearProgressMsg Demo.LinearProgress.Msg


update msg model =
    case msg of
        ButtonMsg _ ->
            ( model, Cmd.none )

        CheckboxMsg _ ->
            ( model, Cmd.none )

        FabMsg _ ->
            ( model, Cmd.none )

        IconMsg _ ->
            ( model, Cmd.none )

        IconToggleMsg toggleMsg ->
            Demo.IconToggle.update toggleMsg model.iconToggle
                |> Tuple.mapFirst
                    (\iconToggle -> { model | iconToggle = iconToggle })
                |> Tuple.mapSecond (Cmd.map IconToggleMsg)

        CardMsg _ ->
            ( model, Cmd.none )

        SnackbarMsg snackbarMsg ->
            Demo.Snackbar.update snackbarMsg model.snackbar
                |> Tuple.mapFirst
                    (\snackbar ->
                        { model | snackbar = snackbar }
                    )
                |> Tuple.mapSecond (Cmd.map SnackbarMsg)

        TextfieldMsg textfieldMsg ->
            Demo.Textfield.update textfieldMsg model.textfield
                |> Tuple.mapFirst
                    (\textfield ->
                        { model | textfield = textfield }
                    )
                |> Tuple.mapSecond (Cmd.map TextfieldMsg)

        LinearProgressMsg linearProgressMsg ->
            Demo.LinearProgress.update linearProgressMsg model.linearProgress
                |> Tuple.mapFirst
                    (\linearProgress ->
                        { model | linearProgress = linearProgress }
                    )
                |> Tuple.mapSecond (Cmd.map LinearProgressMsg)


subscriptions model =
    Sub.none


init =
    ( defaultModel, Cmd.none )


view model =
    Html.div
        []
        [ Html.node "style"
            [ Html.Attributes.type_ "text/css" ]
            [ text style
            , text Demo.Button.style
            , text Demo.Card.style
            , text Demo.Snackbar.style
            , text Demo.Icon.style
            , text Demo.IconToggle.style
            , text Demo.LinearProgress.style
            ]
        , Html.div []
            [ Html.map ButtonMsg Demo.Button.view
            , Html.map CheckboxMsg Demo.Checkbox.view
            , Html.map FabMsg Demo.Fab.view
            , Html.map CardMsg Demo.Card.view
            , Html.map IconMsg Demo.Icon.view
            , Html.map IconToggleMsg (Demo.IconToggle.view model.iconToggle)
            , Html.map LinearProgressMsg (Demo.LinearProgress.view model.linearProgress)
            , Html.map TextfieldMsg (Demo.Textfield.view model.textfield)
            ]
        , Html.hr [] []
        , Html.h2 [] [ text "Material Web Components" ]
        , Html.h3 [] [ text "Button" ]
        , Html.div
            [ Html.Attributes.class "group"
            ]
            [ button
                { buttonConfig
                    | raised = True
                    , icon = "map"
                }
                "Hi there"
            , button buttonConfig "I'm a button too"
            ]
        , Html.h3 [] [ text "Radio" ]
        , Html.div
            [ Html.Attributes.class "group"
            ]
            [ radio radioConfig
            , radio radioConfig
            , radio
                { radioConfig
                    | checked = True
                    , additionalAttributes = [ Html.Attributes.class "special" ]
                }
            ]
        , Html.div
            [ Html.Attributes.class "group"
            ]
            [ radio
                { radioConfig
                    | name = "1"
                    , checked = True
                    , additionalAttributes = [ Html.Attributes.class "special" ]
                }
            , radio { radioConfig | name = "1" }
            , radio { radioConfig | name = "1" }
            ]
        , Html.h3 [] [ text "Switch" ]
        , Html.div
            [ Html.Attributes.class "group"
            ]
            [ switch switchConfig
            , switch
                { switchConfig
                    | checked = True
                    , additionalAttributes = [ Html.Attributes.class "special" ]
                }
            ]
        , Html.h3 [] [ text "Ripple" ]
        , Html.div
            [ Html.Attributes.class "group"
            ]
            [ Html.div
                [ Html.Attributes.class "box3"
                , Html.Attributes.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple rippleConfig
                ]
            , Html.div
                [ Html.Attributes.class "box3"
                , Html.Attributes.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple { rippleConfig | primary = True }
                ]
            , Html.div
                [ Html.Attributes.class "box3"
                , Html.Attributes.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple { rippleConfig | secondary = True }
                ]
            ]
        , Html.h3 [] [ text "Card" ]
        , Html.map SnackbarMsg (Demo.Snackbar.view model.snackbar)
        ]


main =
    Html.program
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


style =
    """
body {
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  .unresolved {
    opacity: 0;
  }

  body {
    transition: opacity ease-in 0.2s;
  }

  header {
    background-color: #6200ee;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: 0.02em;
    color: white;
    min-height: 64px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  header > a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }

  mwc-icon {
    margin: 0 16px;
  }

  main {
    margin-top: 64px;
    padding: 16px;
  }

  .demo-group, .demo-group-spaced {
    display: flex;
    align-items: center;
  }

  .demo-group-spaced {
    justify-content: space-around;
  }

  .demo-group > *, .demo-group-spaced > * {
    margin: 0 8px;
  }
  """
