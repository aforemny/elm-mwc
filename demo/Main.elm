module Main exposing (..)

import Demo.Button
import Demo.Card
import Demo.Checkbox
import Demo.Chips
import Demo.Fab
import Demo.Icon
import Demo.IconToggle
import Demo.LinearProgress
import Demo.Radio
import Demo.Ripple
import Demo.Snackbar
import Demo.Switch
import Demo.Textfield
import Html exposing (Html, text)
import Html.Attributes
import Html.Events as Html
import Mwc.Button as Button exposing (button, buttonConfig)
import Mwc.Card as Card exposing (card, cardConfig)
import Mwc.Checkbox exposing (checkbox, checkboxConfig)
import Mwc.Chips exposing (chip, chipConfig, chipSet, chipSetConfig)
import Mwc.Dialog exposing (dialog, dialogConfig)
import Mwc.Fab exposing (fab, fabConfig)
import Mwc.FormField exposing (formField, formFieldConfig)
import Mwc.Icon exposing (icon, iconConfig)
import Mwc.List exposing (item, itemConfig, itemSeparator, itemSeparatorConfig)
import Mwc.Menu exposing (menu, menuConfig)
import Mwc.Ripple exposing (ripple, rippleConfig)
import Mwc.Select exposing (select, selectConfig)
import Mwc.Slider exposing (slider, sliderConfig)
import Mwc.Snackbar exposing (snackbar, snackbarConfig)
import Mwc.Tabs exposing (tab, tabBar, tabBarConfig, tabConfig)


type alias Model =
    { button : Demo.Button.Model
    , card : Demo.Card.Model
    , snackbar : Demo.Snackbar.Model
    , textfield : Demo.Textfield.Model
    , iconToggle : Demo.IconToggle.Model
    , linearProgress : Demo.LinearProgress.Model
    , radio : Demo.Radio.Model
    , ripple : Demo.Ripple.Model
    , switch : Demo.Switch.Model
    , checkbox : Demo.Checkbox.Model
    , fab : Demo.Fab.Model
    , icon : Demo.Icon.Model
    }


defaultModel : Model
defaultModel =
    { button = Demo.Button.defaultModel
    , card = Demo.Card.defaultModel
    , snackbar = Demo.Snackbar.Model
    , textfield = Demo.Textfield.Model
    , iconToggle = Demo.IconToggle.defaultModel
    , linearProgress = Demo.LinearProgress.defaultModel
    , radio = Demo.Radio.defaultModel
    , ripple = Demo.Ripple.defaultModel
    , switch = Demo.Switch.defaultModel
    , checkbox = Demo.Checkbox.defaultModel
    , fab = Demo.Fab.defaultModel
    , icon = Demo.Icon.defaultModel
    }


type Msg
    = ButtonMsg Demo.Button.Msg
    | CheckboxMsg Demo.Checkbox.Msg
    | FabMsg Demo.Fab.Msg
    | CardMsg Demo.Card.Msg
    | IconMsg Demo.Icon.Msg
    | IconToggleMsg Demo.IconToggle.Msg
    | SnackbarMsg Demo.Snackbar.Msg
    | TextfieldMsg Demo.Textfield.Msg
    | LinearProgressMsg Demo.LinearProgress.Msg
    | SwitchMsg Demo.Switch.Msg
    | RadioMsg Demo.Radio.Msg
    | RippleMsg Demo.Ripple.Msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


init : ( Model, Cmd Msg )
init =
    ( defaultModel, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case Debug.log "Msg" msg of
        ButtonMsg buttonMsg ->
            Demo.Button.update buttonMsg model.button
                |> Tuple.mapFirst (\button -> { model | button = button })
                |> Tuple.mapSecond (Cmd.map ButtonMsg)

        CheckboxMsg checkboxMsg ->
            Demo.Checkbox.update checkboxMsg model.checkbox
                |> Tuple.mapFirst (\checkbox -> { model | checkbox = checkbox })
                |> Tuple.mapSecond (Cmd.map CheckboxMsg)

        FabMsg fabMsg ->
            Demo.Fab.update fabMsg model.fab
                |> Tuple.mapFirst (\fab -> { model | fab = fab })
                |> Tuple.mapSecond (Cmd.map FabMsg)

        IconMsg iconMsg ->
            Demo.Icon.update iconMsg model.icon
                |> Tuple.mapFirst (\icon -> { model | icon = icon })
                |> Tuple.mapSecond (Cmd.map IconMsg)

        IconToggleMsg toggleMsg ->
            Demo.IconToggle.update toggleMsg model.iconToggle
                |> Tuple.mapFirst (\iconToggle -> { model | iconToggle = iconToggle })
                |> Tuple.mapSecond (Cmd.map IconToggleMsg)

        CardMsg cardMsg ->
            Demo.Card.update cardMsg model.card
                |> Tuple.mapFirst (\card -> { model | card = card })
                |> Tuple.mapSecond (Cmd.map CardMsg)

        SnackbarMsg snackbarMsg ->
            Demo.Snackbar.update snackbarMsg model.snackbar
                |> Tuple.mapFirst
                    (\snackbar -> { model | snackbar = snackbar })
                |> Tuple.mapSecond (Cmd.map SnackbarMsg)

        TextfieldMsg textfieldMsg ->
            Demo.Textfield.update textfieldMsg model.textfield
                |> Tuple.mapFirst
                    (\textfield -> { model | textfield = textfield })
                |> Tuple.mapSecond (Cmd.map TextfieldMsg)

        LinearProgressMsg linearProgressMsg ->
            Demo.LinearProgress.update linearProgressMsg model.linearProgress
                |> Tuple.mapFirst
                    (\linearProgress -> { model | linearProgress = linearProgress })
                |> Tuple.mapSecond (Cmd.map LinearProgressMsg)

        SwitchMsg switchMsg ->
            Demo.Switch.update switchMsg model.switch
                |> Tuple.mapFirst (\switch -> { model | switch = switch })
                |> Tuple.mapSecond (Cmd.map SwitchMsg)

        RadioMsg radioMsg ->
            Demo.Radio.update radioMsg model.radio
                |> Tuple.mapFirst (\radio -> { model | radio = radio })
                |> Tuple.mapSecond (Cmd.map RadioMsg)

        RippleMsg rippleMsg ->
            Demo.Ripple.update rippleMsg model.ripple
                |> Tuple.mapFirst (\ripple -> { model | ripple = ripple })
                |> Tuple.mapSecond (Cmd.map RippleMsg)


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
            , text Demo.Ripple.style
            ]
        , Html.h2 [] [ text "Material Web Components" ]
        , Html.hr [] []
        , Html.div []
            [ Html.map ButtonMsg (Demo.Button.view model.button)
            , Html.map CheckboxMsg (Demo.Checkbox.view model.checkbox)
            , Html.map FabMsg (Demo.Fab.view model.fab)
            , Html.map CardMsg (Demo.Card.view model.card)
            , Html.map IconMsg (Demo.Icon.view model.icon)
            , Html.map IconToggleMsg (Demo.IconToggle.view model.iconToggle)
            , Html.map LinearProgressMsg (Demo.LinearProgress.view model.linearProgress)
            , Html.map RadioMsg (Demo.Radio.view model.radio)
            , Html.map RippleMsg (Demo.Ripple.view model.ripple)
            , Html.map TextfieldMsg (Demo.Textfield.view model.textfield)
            , Html.map SwitchMsg (Demo.Switch.view model.switch)
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
