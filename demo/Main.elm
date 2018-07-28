module Main exposing (..)

import Html.Attributes as Html
import Html.Events as Html
import Html exposing (Html, text)
import Mwc.Button as Mwc exposing (button, buttonConfig)
import Mwc.Checkbox as Mwc exposing (checkbox, checkboxConfig)
import Mwc.Fab as Mwc exposing (fab, fabConfig)
import Mwc.Icon as Mwc exposing (icon, iconConfig)
import Mwc.Radio as Mwc exposing (radio, radioConfig)
import Mwc.Ripple as Mwc exposing (ripple, rippleConfig)
import Mwc.Switch as Mwc exposing (switch, switchConfig)


main =
    Html.div
        []
        [ Html.h2 [] [ text "Material Web Components" ]
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
        , Html.h3 [] [ text "Fab" ]
        , Html.div
            [ Html.class "group"
            ]
            [ fab fabConfig "map"
            , fab
                { fabConfig
                    | additionalAttributes = [ Html.class "light" ]
                }
                "explore"
            , fab
                { fabConfig
                    | additionalAttributes = [ Html.class "special" ]
                }
                "code"
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
        , Html.h3 [] [ text "Checkbox" ]
        , Html.div
            [ Html.class "group"
            ]
            [ checkbox checkboxConfig ""
            , checkbox
                { checkboxConfig
                    | checked = True
                }
                ""
            , checkbox
                { checkboxConfig
                    | indeterminate = True
                    , additionalAttributes = [ Html.class "special" ]
                }
                ""
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
        ]
