module Mwc.Tabs exposing (..)

import Html exposing (Html, text)
import Html.Attributes as Html


type alias TabConfig msg =
    { href : String
    , icon : String
    , label : String
    , additionalAttributes : List (Html.Attribute msg)
    }


tab : TabConfig msg -> Html msg
tab config =
    Html.node "mwc-tab"
        ([ Html.attribute "href" config.href
         , Html.attribute "icon" config.icon
         , Html.attribute "label" config.label
         ]
            ++ config.additionalAttributes
        )
        []


tabConfig : TabConfig msg
tabConfig =
    { href = ""
    , icon = ""
    , label = ""
    , additionalAttributes = []
    }


type alias TabBarConfig msg =
    { activeIndex : Int
    , additionalAttributes : List (Html.Attribute msg)
    }


tabBar : TabBarConfig msg -> Html msg
tabBar config =
    Html.node "mwc-tab-bar"
        ([ Html.attribute "activeIndex" (toString config.activeIndex)
         ]
            ++ config.additionalAttributes
        )
        []


tabBarConfig : TabBarConfig msg
tabBarConfig =
    { activeIndex = 0
    , additionalAttributes = []
    }


type alias TabBarScrollerConfig msg =
    { additionalAttributes : List (Html.Attribute msg)
    }


tabBarScroller : TabBarScrollerConfig msg -> Html msg
tabBarScroller config =
    Html.node "mwc-tab-bar-scroller"
        config.additionalAttributes
        []


tabBarScrollerConfig : TabBarScrollerConfig msg
tabBarScrollerConfig =
    { additionalAttributes = [] }
