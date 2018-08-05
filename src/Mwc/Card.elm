module Mwc.Card exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Button as Button
import Mwc.Icon as Icon
import Mwc.Ripple exposing (rippleConfig)


type alias Config msg =
    { outlined : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


cardConfig : Config msg
cardConfig =
    { outlined = False
    , additionalAttributes = []
    }


card : Config msg -> Content msg -> Html msg
card config content =
    let
        blocks =
            List.map (\(Block block) -> block) content.blocks

        actions =
            case content.actions of
                Just (Actions { buttons, icons, fullBleed }) ->
                    [ Html.div
                        (List.filterMap identity
                            [ Just (Html.class "mdc-card__actions")
                            , if fullBleed then
                                Just (Html.class "mdc-card__action--full-bleed")
                              else
                                Nothing
                            ]
                        )
                        [ Html.div
                            [ Html.class "mdc-card__action-buttons" ]
                            (List.map (\(Button button) -> button) buttons)
                        , Html.div
                            [ Html.class "mdc-card__action-icons" ]
                            (List.map (\(Icon icon) -> icon) icons)
                        ]
                    ]

                Nothing ->
                    []
    in
    Html.div
        (Html.class "mdc-card"
            :: Html.class "mdc-card--outlined"
            :: config.additionalAttributes
        )
        (List.concat
            [ blocks
            , actions
            ]
        )


type alias Content msg =
    { blocks : List (Block msg)
    , actions : Maybe (Actions msg)
    }


type Block msg
    = Block (Html msg)


type Actions msg
    = Actions
        { buttons : List (Button msg)
        , icons : List (Icon msg)
        , fullBleed : Bool
        }


type alias PrimaryActionConfig msg =
    { ripple : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


primaryActionConfig : PrimaryActionConfig msg
primaryActionConfig =
    { ripple = True
    , additionalAttributes = []
    }


primaryAction : PrimaryActionConfig msg -> List (Block msg) -> List (Block msg)
primaryAction config blocks =
    [ Block <|
        Html.div
            (Html.class "mdc-card__primary-action" :: config.additionalAttributes)
            (List.map (\(Block html) -> html) blocks
                ++ (if config.ripple then
                        [ Mwc.Ripple.ripple rippleConfig
                        ]
                    else
                        []
                   )
            )
    ]


type alias MediaConfig msg =
    { aspect : Maybe Aspect
    , additionalAttributes : List (Html.Attribute msg)
    }


mediaConfig : MediaConfig msg
mediaConfig =
    { aspect = Nothing
    , additionalAttributes = []
    }


type Aspect
    = Square
    | SixteenToNine


media : MediaConfig msg -> String -> Block msg
media config backgroundImage =
    Block <|
        Html.div
            (List.filterMap identity
                [ Just (Html.class "mdc-card__media")
                , Just (Html.style [ ( "background-image", "url(\"" ++ backgroundImage ++ "\")" ) ])
                , config.aspect
                    |> Maybe.map
                        (\aspect ->
                            case aspect of
                                Square ->
                                    Html.class "mdc-card__media--square"

                                SixteenToNine ->
                                    Html.class "mdc-card__media--16-9"
                        )
                ]
                ++ config.additionalAttributes
            )
            []


custom : Html msg -> Block msg
custom =
    Block


type ActionsContent msg
    = ActionsContent
        { buttons : List (Button msg)
        , icons : List (Icon msg)
        , fullBleed : Bool
        }


actions :
    { buttons : List (Button msg)
    , icons : List (Icon msg)
    }
    -> Actions msg
actions { buttons, icons } =
    Actions
        { buttons = buttons
        , icons = icons
        , fullBleed = False
        }


fullBleedAction : Button msg -> Actions msg
fullBleedAction button =
    Actions
        { buttons = [ button ]
        , icons = []
        , fullBleed = True
        }


type Button msg
    = Button (Html msg)


actionButton :
    Button.Config msg
    -> String
    -> Button msg
actionButton buttonConfig buttonLabel =
    Button <|
        Button.button
            { buttonConfig
                | additionalAttributes =
                    Html.class "mdc-card__action"
                        :: Html.class "mdc-card__action--button"
                        :: buttonConfig.additionalAttributes
            }
            buttonLabel


type Icon msg
    = Icon (Html msg)


actionIcon :
    Icon.Config msg
    -> String
    -> Icon msg
actionIcon iconConfig iconName =
    Icon <|
        Icon.icon
            { iconConfig
                | additionalAttributes =
                    Html.class "mdc-card__action"
                        :: Html.class "mdc-card__action--icon"
                        :: iconConfig.additionalAttributes
            }
            iconName
