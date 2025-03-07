// Generated by Framer (bdfb9a2)
import { jsx as _jsx } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  useActiveVariantCallback,
  useOnVariantChange,
  useVariantState,
  withCSS,
} from "src/components/framer.jsx";
import { LayoutGroup, motion } from "framer-motion";
import * as React from "react";
const cycleOrder = ["JpA4D8_9J", "iDKw4ek_E", "wHyk6jz45"];
const variantClassNames = {
  iDKw4ek_E: "framer-v-681m0p",
  JpA4D8_9J: "framer-v-sotxwg",
  wHyk6jz45: "framer-v-1chok0t",
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) =>
          variant && Object.assign(nextOverrides, overrides[variant]),
      );
  return nextOverrides;
}
const humanReadableVariantMap = {
  "Variant 1": "JpA4D8_9J",
  "Variant 2": "iDKw4ek_E",
  "Variant 3": "wHyk6jz45",
};
const transitions = {
  default: {
    damping: 60,
    delay: 0,
    duration: 0,
    ease: [0, 0, 1, 1],
    mass: 1,
    stiffness: 500,
    type: "tween",
  },
  iDKw4ek_E: {
    damping: 80,
    delay: 0,
    duration: 1,
    ease: [0.44, 0, 0.56, 1],
    mass: 1,
    stiffness: 500,
    type: "tween",
  },
};
const Component = /*#__PURE__*/ React.forwardRef(function (
  {
    id,
    style,
    className,
    width,
    height,
    layoutId,
    variant: outerVariant = "JpA4D8_9J",
    ...restProps
  },
  ref,
) {
  const outerVariantId = humanReadableVariantMap[outerVariant];
  const variant = outerVariantId || outerVariant;
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "JpA4D8_9J",
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = variants.join("-") + restProps.layoutDependency;
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onAppear1ium6q4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("iDKw4ek_E"), 900);
  });
  const onAppear16yfd7e = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("wHyk6jz45"), 1e3);
  });
  const onAppear7a1474 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("JpA4D8_9J"), 100);
  });
  useOnVariantChange(baseVariant, {
    default: onAppear1ium6q4,
    iDKw4ek_E: onAppear16yfd7e,
    wHyk6jz45: onAppear7a1474,
  });
  const defaultLayoutId = React.useId();
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx("framer-ssL1h", classNames),
      style: { display: "contents" },
      children: /*#__PURE__*/ _jsx(motion.div, {
        ...restProps,
        className: cx("framer-sotxwg", className),
        "data-framer-name": "Variant 1",
        "data-highlight": true,
        layoutDependency: layoutDependency,
        layoutId: "JpA4D8_9J",
        ref: ref,
        style: { ...style },
        transition: transition,
        ...addPropertyOverrides(
          {
            iDKw4ek_E: { "data-framer-name": "Variant 2" },
            wHyk6jz45: { "data-framer-name": "Variant 3" },
          },
          baseVariant,
          gestureVariant,
        ),
        children: /*#__PURE__*/ _jsx(motion.div, {
          className: "framer-15e6j7s",
          "data-framer-name": "Gradient",
          layoutDependency: layoutDependency,
          layoutId: "ZNvMfhPpn",
          style: {
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, hsl(0, 0%, 100%) 100%)",
          },
          transition: transition,
        }),
      }),
    }),
  });
});
const css = [
  '.framer-ssL1h [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-ssL1h .framer-1i8g7nl { display: block; }",
  ".framer-ssL1h .framer-sotxwg { height: 34px; overflow: hidden; position: relative; width: 234px; }",
  ".framer-ssL1h .framer-15e6j7s { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: -70px; top: 0px; width: 70px; }",
  ".framer-ssL1h.framer-v-681m0p .framer-15e6j7s { left: -70px; right: unset; }",
  ".framer-ssL1h.framer-v-1chok0t .framer-15e6j7s { bottom: unset; height: 1px; left: -70px; right: unset; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 34
 * @framerIntrinsicWidth 234
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"iDKw4ek_E":{"layout":["fixed","fixed"]},"wHyk6jz45":{"layout":["fixed","fixed"]}}}
 */ const FramerJgOnmcTtx = withCSS(Component, css, "framer-ssL1h");
export default FramerJgOnmcTtx;
FramerJgOnmcTtx.displayName = "Shimmer Bottom";
FramerJgOnmcTtx.defaultProps = { height: 34, width: 234 };
addPropertyControls(FramerJgOnmcTtx, {
  variant: {
    options: ["JpA4D8_9J", "iDKw4ek_E", "wHyk6jz45"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(FramerJgOnmcTtx, []);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerJgOnmcTtx",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"iDKw4ek_E":{"layout":["fixed","fixed"]},"wHyk6jz45":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicHeight: "34",
        framerIntrinsicWidth: "234",
        framerContractVersion: "1",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./JgOnmcTtx.map
