module Demo.Card exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html
import Mwc.Button exposing (button, buttonConfig)
import Mwc.Card as Card exposing (card, cardConfig)
import Mwc.Icon exposing (icon, iconConfig)
import Mwc.Typography as Typography


style =
    """
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.05);
}

.presentCard {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.content {
  padding: 8px;
}

.rounded {
  border-radius: 8px;
  overflow: hidden;
}

.mdc-card {
  max-width: 350px;
}

.my-media {
  background-image: url('https://material-components-web.appspot.com/images/16-9.jpg');
}

.content {
  padding: 1rem;
}

.subtext {
  color: rgba(0, 0, 0, 0.54);
}
    """


view =
    Html.node "main"
        []
        [ Card.card Card.cardConfig
            { blocks =
                Card.primaryAction Card.primaryActionConfig
                    [ Card.media
                        (Card.mediaConfig
                            |> (\mediaConfig ->
                                    { mediaConfig
                                        | aspect = Just Card.SixteenToNine
                                    }
                               )
                        )
                        "https://material-components-web.appspot.com/images/16-9.jpg"
                    , Card.custom
                        (Html.div
                            [ Html.class "content" ]
                            [ Html.h2
                                [ Typography.headline1 ]
                                [ text "Our Changing Planet"
                                ]
                            , Html.h3
                                [ Html.class "subtext"
                                , Typography.subtitle1
                                ]
                                [ text "by Kurt Wagner"
                                ]
                            , Html.div
                                [ Html.class "subtext"
                                , Typography.body1
                                ]
                                [ text "Visit ten places on our planet that are undergoing the biggest changes today."
                                ]
                            ]
                         -- TODO: typography
                        )
                    ]
            , actions =
                Just <|
                    Card.actions
                        { buttons =
                            [ Card.actionButton buttonConfig "Read"
                            , Card.actionButton buttonConfig "Save"
                            ]
                        , icons =
                            [ Card.actionIcon iconConfig "share"
                            , Card.actionIcon iconConfig "more_vert"
                            ]
                        }
            }
        ]
