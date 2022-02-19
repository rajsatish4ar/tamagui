import { ThemeableProps } from '@tamagui/core';
import React from 'react';
import { InteractiveFrameProps } from './InteractiveFrame';
import { SizableTextProps } from './SizableText';
declare type IconProp = JSX.Element | ((props: {
    color?: string;
    size?: number;
}) => JSX.Element) | null;
export declare type ButtonProps = InteractiveFrameProps & ThemeableProps & {
    color?: SizableTextProps['color'];
    noTextWrap?: boolean;
    icon?: IconProp;
    iconAfter?: IconProp;
};
export declare const Button: (props: Pick<Omit<Omit<import("@tamagui/core").StackProps, "elevation" | "fullscreen"> & {
    fullscreen?: boolean | null | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
} & import("@tamagui/core").MediaProps<{
    fullscreen?: boolean | null | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}> & import("@tamagui/core").PseudoProps<{
    fullscreen?: boolean | null | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}>, "size" | "transparent" | "hoverable" | "pressable" | "circular" | "disabled" | "active" | "chromeless"> & {
    hoverable?: boolean | null | undefined;
    pressable?: boolean | null | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    active?: boolean | null | undefined;
    transparent?: boolean | null | undefined;
    chromeless?: boolean | null | undefined;
} & import("@tamagui/core").MediaProps<{
    hoverable?: boolean | null | undefined;
    pressable?: boolean | null | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    active?: boolean | null | undefined;
    transparent?: boolean | null | undefined;
    chromeless?: boolean | null | undefined;
}> & import("@tamagui/core").PseudoProps<{
    hoverable?: boolean | null | undefined;
    pressable?: boolean | null | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    active?: boolean | null | undefined;
    transparent?: boolean | null | undefined;
    chromeless?: boolean | null | undefined;
}> & ThemeableProps & {
    color?: SizableTextProps['color'];
    noTextWrap?: boolean | undefined;
    icon?: IconProp | undefined;
    iconAfter?: IconProp | undefined;
}, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "accessibilityState" | "accessibilityValue" | "focusable" | "nativeID" | "onBlur" | "onClick" | "onClickCapture" | "onContextMenu" | "onFocus" | "onKeyDown" | "onKeyUp" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "pointerEvents" | "testID" | "dataSet" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseOver" | "onMouseOut" | "onMouseUp" | "onScroll" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "href" | "hrefAttrs" | "display" | "hitSlop" | "removeClippedSubviews" | "style" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityHint" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "elevation" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "cursor" | "contain" | "color" | "size" | "space" | "fullscreen" | "hoverStyle" | "pressStyle" | "animation" | "className" | "tag" | "animated" | "onHoverIn" | "onHoverOut" | "onPress" | "onPressIn" | "onPressOut" | "theme" | "transparent" | "hoverable" | "pressable" | "circular" | "disabled" | "active" | "chromeless" | "themeInverse" | "noTextWrap" | "icon" | "iconAfter"> & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const getSpaceSize: (size: any, sizeUpOrDownBy?: number) => import("@tamagui/core").Variable;
export {};
//# sourceMappingURL=Button.d.ts.map