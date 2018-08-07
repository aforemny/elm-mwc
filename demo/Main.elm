module Main exposing (..)

import Demo.Button
import Demo.Card
import Demo.Checkbox
import Demo.Chips
import Demo.Fab
import Html exposing (Html, text)
import Html.Attributes as Html
import Html.Events as Html
import Mwc.Button exposing (button, buttonConfig)
import Mwc.Card as Card exposing (card, cardConfig)
import Mwc.Checkbox exposing (checkbox, checkboxConfig)
import Mwc.Chips exposing (chip, chipConfig, chipSet, chipSetConfig)
import Mwc.Dialog exposing (dialog, dialogConfig)
import Mwc.Fab exposing (fab, fabConfig)
import Mwc.FormField exposing (formField, formFieldConfig)
import Mwc.Icon exposing (icon, iconConfig)
import Mwc.IconToggle exposing (iconToggle, iconToggleConfig)
import Mwc.LinearProgress exposing (linearProgress, linearProgressConfig)
import Mwc.List exposing (item, itemConfig, itemSeparator, itemSeparatorConfig)
import Mwc.Menu exposing (menu, menuConfig)
import Mwc.Radio exposing (radio, radioConfig)
import Mwc.Ripple exposing (ripple, rippleConfig)
import Mwc.Select exposing (select, selectConfig)
import Mwc.Slider exposing (slider, sliderConfig)
import Mwc.Snackbar exposing (snackbar, snackbarConfig)
import Mwc.Switch exposing (switch, switchConfig)
import Mwc.Tabs exposing (tab, tabBar, tabBarConfig, tabConfig)
import Mwc.Textfield exposing (textfield, textfieldConfig)


main =
    Html.div
        []
        [ Html.node "style"
            [ Html.type_ "text/css" ]
            [ text style
            , text Demo.Button.style
            , text Demo.Card.style
            ]
        , Demo.Button.view
        , Demo.Card.view
        , Demo.Checkbox.view
        , Demo.Fab.view
        , Html.hr [] []
        , Html.h2 [] [ text "Material Web Components" ]
        , Html.h3 [] [ text "Button" ]
        , Html.div
            [ Html.class "group"
            ]
            [ button
                { buttonConfig
                    | raised = True
                    , icon = "map"
                }
                "Hi there"
            , button buttonConfig "I'm a button too"
            ]
        , Html.h3 [] [ text "Icon" ]
        , Html.div
            [ Html.class "group"
            ]
            [ icon iconConfig "map"
            , icon
                { iconConfig
                    | additionalAttributes = [ Html.class "light-icon" ]
                }
                "explore"
            , icon
                { iconConfig
                    | additionalAttributes = [ Html.class "special-icon" ]
                }
                "code"
            ]
        , Html.h3 [] [ text "Radio" ]
        , Html.div
            [ Html.class "group"
            ]
            [ radio radioConfig
            , radio radioConfig
            , radio
                { radioConfig
                    | checked = True
                    , additionalAttributes = [ Html.class "special" ]
                }
            ]
        , Html.div
            [ Html.class "group"
            ]
            [ radio
                { radioConfig
                    | name = "1"
                    , checked = True
                    , additionalAttributes = [ Html.class "special" ]
                }
            , radio { radioConfig | name = "1" }
            , radio { radioConfig | name = "1" }
            ]
        , Html.h3 [] [ text "Switch" ]
        , Html.div
            [ Html.class "group"
            ]
            [ switch switchConfig
            , switch
                { switchConfig
                    | checked = True
                    , additionalAttributes = [ Html.class "special" ]
                }
            ]
        , Html.h3 [] [ text "Ripple" ]
        , Html.div
            [ Html.class "group"
            ]
            [ Html.div
                [ Html.class "box3"
                , Html.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple rippleConfig
                ]
            , Html.div
                [ Html.class "box3"
                , Html.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple { rippleConfig | primary = True }
                ]
            , Html.div
                [ Html.class "box3"
                , Html.style [ ( "position", "relative" ) ]
                ]
                [ text "Ripple me"
                , ripple { rippleConfig | secondary = True }
                ]
            ]
        , Html.h3 [] [ text "Card" ]
        ]


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
