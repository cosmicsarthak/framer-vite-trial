// Generated by Framer (cf4c6d7)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useOnVariantChange,
  useVariantState,
  withCSS,
} from "src/components/framer.jsx";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
const cycleOrder = [
  "so6iT3IIO",
  "d3VmZ3h0G",
  "mwAWKWohd",
  "sBo34Uare",
  "vlYcngcin",
];
const serializationHash = "framer-dbb64";
const variantClassNames = {
  d3VmZ3h0G: "framer-v-chi7am",
  mwAWKWohd: "framer-v-1c9opte",
  sBo34Uare: "framer-v-faasa8",
  so6iT3IIO: "framer-v-1g16ihm",
  vlYcngcin: "framer-v-1vnwwcc",
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(
    (variant) => variant && Object.assign(nextOverrides, overrides[variant]),
  );
  return nextOverrides;
}
const transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring",
};
const Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)],
  );
  return /*#__PURE__*/ _jsx(MotionConfigContext.Provider, {
    value: contextValue,
    children: children,
  });
};
const Variants = motion.create(React.Fragment);
const humanReadableVariantMap = {
  "Variant 1": "so6iT3IIO",
  "Variant 2": "d3VmZ3h0G",
  "Variant 3": "mwAWKWohd",
  "Variant 4": "sBo34Uare",
  Inactive: "vlYcngcin",
};
const getProps = ({ height, id, width, ...props }) => {
  return {
    ...props,
    variant:
      humanReadableVariantMap[props.variant] ?? props.variant ?? "so6iT3IIO",
  };
};
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "so6iT3IIO",
    ref: refBinding,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onAppearx7ore0 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("d3VmZ3h0G"), 1400);
  });
  const onAppear1sxrdh1 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("mwAWKWohd"), 200);
  });
  const onAppear1l76mex = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("sBo34Uare"), 100);
  });
  const onAppeartx6hnl = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("so6iT3IIO"), 300);
  });
  useOnVariantChange(baseVariant, {
    d3VmZ3h0G: onAppear1sxrdh1,
    default: onAppearx7ore0,
    mwAWKWohd: onAppear1l76mex,
    sBo34Uare: onAppeartx6hnl,
    vlYcngcin: undefined,
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId ?? defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition1,
        children: /*#__PURE__*/ _jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            scopingClassNames,
            "framer-1g16ihm",
            className,
            classNames,
          ),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency: layoutDependency,
          layoutId: "so6iT3IIO",
          ref: refBinding,
          style: { ...style },
          ...addPropertyOverrides(
            {
              d3VmZ3h0G: { "data-framer-name": "Variant 2" },
              mwAWKWohd: { "data-framer-name": "Variant 3" },
              sBo34Uare: { "data-framer-name": "Variant 4" },
              vlYcngcin: {
                "data-framer-name": "Inactive",
                "data-highlight": undefined,
              },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-1j9enrm",
              "data-framer-name": "Smol Star",
              layoutDependency: layoutDependency,
              layoutId: "Il7ISASpJ",
              children: /*#__PURE__*/ _jsx(SVG, {
                className: "framer-1kpxurm",
                "data-framer-name": "Graphic",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "q5rsRcbVE",
                opacity: 0.3,
                style: { opacity: 0.3 },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 6"><path d="M 2.221 2.121 L 2.858 0.53 C 2.889 0.452 2.965 0.4 3.05 0.4 C 3.135 0.4 3.211 0.452 3.242 0.53 L 3.879 2.121 L 5.47 2.758 C 5.548 2.789 5.6 2.865 5.6 2.95 C 5.6 3.035 5.548 3.111 5.47 3.142 L 3.879 3.779 L 3.242 5.37 C 3.211 5.449 3.135 5.5 3.05 5.5 C 2.965 5.5 2.889 5.449 2.858 5.37 L 2.221 3.779 L 0.63 3.142 C 0.551 3.111 0.5 3.035 0.5 2.95 C 0.5 2.865 0.551 2.789 0.63 2.758 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                svgContentId: 8923220155,
                variants: { mwAWKWohd: { opacity: 1 } },
                withExternalLayout: true,
                ...addPropertyOverrides(
                  {
                    mwAWKWohd: {
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 6.451 6.124 L 8.534 0.917 C 8.637 0.659 8.887 0.491 9.164 0.491 C 9.441 0.491 9.69 0.659 9.793 0.917 L 11.876 6.124 L 17.083 8.207 C 17.341 8.31 17.509 8.559 17.509 8.836 C 17.509 9.113 17.341 9.363 17.083 9.466 L 11.876 11.549 L 9.793 16.756 C 9.69 17.013 9.441 17.182 9.164 17.182 C 8.887 17.182 8.637 17.013 8.534 16.756 L 6.451 11.549 L 1.244 9.466 C 0.987 9.363 0.818 9.113 0.818 8.836 C 0.818 8.559 0.987 8.31 1.244 8.207 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                      svgContentId: 12024358877,
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-165p8ft",
              "data-framer-name": "Medium Star",
              layoutDependency: layoutDependency,
              layoutId: "QwZz0hJeV",
              children: /*#__PURE__*/ _jsx(SVG, {
                className: "framer-1gepw2r",
                "data-framer-name": "Graphic",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "HWVPI58hd-shape",
                opacity: 0.5,
                style: { opacity: 0.5 },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 4.442 4.243 L 5.715 1.06 C 5.778 0.903 5.931 0.8 6.1 0.8 C 6.269 0.8 6.421 0.903 6.484 1.06 L 7.757 4.243 L 10.94 5.516 C 11.097 5.579 11.2 5.731 11.2 5.9 C 11.2 6.069 11.097 6.222 10.94 6.285 L 7.757 7.558 L 6.484 10.74 C 6.421 10.897 6.269 11 6.1 11 C 5.931 11 5.778 10.897 5.715 10.74 L 4.442 7.558 L 1.26 6.285 C 1.103 6.222 1 6.069 1 5.9 C 1 5.731 1.103 5.579 1.26 5.516 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                svgContentId: 11096595865,
                variants: {
                  d3VmZ3h0G: { opacity: 1 },
                  mwAWKWohd: { opacity: 0.2 },
                },
                withExternalLayout: true,
                ...addPropertyOverrides(
                  {
                    d3VmZ3h0G: {
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19"><path d="M 6.584 6.329 L 8.921 0.485 C 9.037 0.197 9.317 0.008 9.627 0.008 C 9.938 0.008 10.218 0.197 10.333 0.485 L 12.671 6.329 L 18.515 8.667 C 18.803 8.782 18.992 9.062 18.992 9.373 C 18.992 9.683 18.803 9.963 18.515 10.079 L 12.671 12.416 L 10.333 18.26 C 10.218 18.549 9.938 18.738 9.627 18.738 C 9.317 18.738 9.037 18.549 8.921 18.26 L 6.584 12.416 L 0.74 10.079 C 0.451 9.963 0.262 9.683 0.262 9.373 C 0.262 9.062 0.451 8.782 0.74 8.667 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                      svgContentId: 12531535133,
                    },
                    mwAWKWohd: { opacity: 0.2, svgContentId: 9960017227 },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-1v1q3c4",
              "data-framer-name": "Big Star",
              layoutDependency: layoutDependency,
              layoutId: "cTQtw1991",
              children: /*#__PURE__*/ _jsx(SVG, {
                className: "framer-6vbass",
                "data-framer-name": "Graphic",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "E_480KN8b-shape",
                opacity: 1,
                style: { opacity: 1 },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 19"><path d="M 5.148 6.898 C 5.523 6.732 5.823 6.433 5.989 6.058 L 7.91 1.737 C 8.11 1.289 8.554 1 9.045 1 C 9.536 1 9.981 1.289 10.18 1.737 L 12.102 6.058 C 12.267 6.433 12.567 6.733 12.942 6.898 L 17.263 8.82 C 17.711 9.019 18 9.464 18 9.955 C 18 10.446 17.711 10.89 17.263 11.09 L 12.942 13.011 C 12.567 13.177 12.268 13.477 12.102 13.852 L 10.18 18.173 C 9.981 18.621 9.536 18.91 9.045 18.91 C 8.554 18.91 8.11 18.621 7.91 18.173 L 5.989 13.852 C 5.823 13.477 5.523 13.177 5.148 13.011 L 0.827 11.09 C 0.379 10.89 0.09 10.446 0.09 9.955 C 0.09 9.464 0.379 9.019 0.827 8.82 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                svgContentId: 11921455740,
                variants: {
                  d3VmZ3h0G: { opacity: 0.2 },
                  mwAWKWohd: { opacity: 0.2 },
                  sBo34Uare: { opacity: 1 },
                  vlYcngcin: { opacity: 1 },
                },
                withExternalLayout: true,
                ...addPropertyOverrides(
                  {
                    d3VmZ3h0G: {
                      opacity: 0.2,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 11"><path d="M 2.86 3.994 C 3.068 3.898 3.235 3.724 3.327 3.507 L 4.394 1.006 C 4.505 0.746 4.752 0.579 5.025 0.579 C 5.298 0.579 5.545 0.746 5.656 1.006 L 6.723 3.507 C 6.815 3.724 6.982 3.898 7.19 3.994 L 9.591 5.106 C 9.84 5.222 10 5.479 10 5.763 C 10 6.047 9.84 6.305 9.591 6.421 L 7.19 7.533 C 6.982 7.629 6.815 7.802 6.723 8.019 L 5.656 10.521 C 5.545 10.781 5.298 10.948 5.025 10.948 C 4.752 10.948 4.505 10.781 4.394 10.521 L 3.327 8.019 C 3.235 7.802 3.068 7.629 2.86 7.533 L 0.459 6.421 C 0.21 6.305 0.05 6.047 0.05 5.763 C 0.05 5.479 0.21 5.222 0.459 5.106 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                      svgContentId: 9267084170,
                    },
                    mwAWKWohd: {
                      opacity: 0.2,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 11"><path d="M 2.86 3.994 C 3.068 3.898 3.235 3.724 3.327 3.507 L 4.394 1.006 C 4.505 0.746 4.752 0.579 5.025 0.579 C 5.298 0.579 5.545 0.746 5.656 1.006 L 6.723 3.507 C 6.815 3.724 6.982 3.898 7.19 3.994 L 9.591 5.106 C 9.84 5.222 10 5.479 10 5.763 C 10 6.047 9.84 6.305 9.591 6.421 L 7.19 7.533 C 6.982 7.629 6.815 7.802 6.723 8.019 L 5.656 10.521 C 5.545 10.781 5.298 10.948 5.025 10.948 C 4.752 10.948 4.505 10.781 4.394 10.521 L 3.327 8.019 C 3.235 7.802 3.068 7.629 2.86 7.533 L 0.459 6.421 C 0.21 6.305 0.05 6.047 0.05 5.763 C 0.05 5.479 0.21 5.222 0.459 5.106 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                      svgContentId: 10042345616,
                    },
                    sBo34Uare: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 6.864 8.077 C 7.364 7.859 7.764 7.464 7.985 6.971 L 10.546 1.285 C 10.813 0.696 11.406 0.316 12.06 0.316 C 12.714 0.316 13.308 0.696 13.574 1.285 L 16.135 6.971 C 16.356 7.464 16.756 7.859 17.256 8.077 L 23.017 10.605 C 23.615 10.868 24 11.453 24 12.099 C 24 12.744 23.615 13.33 23.017 13.593 L 17.256 16.12 C 16.756 16.339 16.357 16.733 16.135 17.226 L 13.574 22.912 C 13.308 23.501 12.714 23.881 12.06 23.881 C 11.406 23.881 10.813 23.501 10.546 22.912 L 7.985 17.226 C 7.764 16.733 7.364 16.339 6.864 16.12 L 1.103 13.593 C 0.505 13.33 0.12 12.744 0.12 12.099 C 0.12 11.453 0.505 10.868 1.103 10.605 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                      svgContentId: 9210229945,
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              }),
            }),
          ],
        }),
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-dbb64.framer-1x3bil1, .framer-dbb64 .framer-1x3bil1 { display: block; }",
  ".framer-dbb64.framer-1g16ihm { height: 28px; overflow: visible; position: relative; width: 28px; }",
  ".framer-dbb64 .framer-1j9enrm { flex: none; height: 6px; left: 4px; overflow: visible; position: absolute; top: 0px; width: 6px; }",
  ".framer-dbb64 .framer-1kpxurm { flex: none; height: 6px; left: calc(50.00000000000002% - 6px / 2); position: absolute; top: calc(50.00000000000002% - 6px / 2); width: 6px; }",
  ".framer-dbb64 .framer-165p8ft { flex: none; height: 12px; left: 1px; overflow: visible; position: absolute; top: 17px; width: 12px; }",
  ".framer-dbb64 .framer-1gepw2r { flex: none; height: 12px; left: calc(50.00000000000002% - 12px / 2); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 12px; }",
  ".framer-dbb64 .framer-1v1q3c4 { flex: none; height: 19px; left: 8px; overflow: visible; position: absolute; top: 3px; width: 18px; }",
  ".framer-dbb64 .framer-6vbass { flex: none; height: 19px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(47.3684210526316% - 19px / 2); width: 18px; }",
  ".framer-dbb64.framer-v-chi7am.framer-1g16ihm, .framer-dbb64.framer-v-1c9opte.framer-1g16ihm, .framer-dbb64.framer-v-faasa8.framer-1g16ihm, .framer-dbb64.framer-v-1vnwwcc.framer-1g16ihm { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 28px); }",
  ".framer-dbb64.framer-v-chi7am .framer-1gepw2r { height: 19px; left: calc(50.00000000000002% - 19px / 2); top: calc(50.00000000000002% - 19px / 2); width: 19px; }",
  ".framer-dbb64.framer-v-chi7am .framer-6vbass, .framer-dbb64.framer-v-1c9opte .framer-6vbass { height: 11px; left: calc(50.00000000000002% - 10px / 2); top: calc(47.3684210526316% - 11px / 2); width: 10px; }",
  ".framer-dbb64.framer-v-1c9opte .framer-1kpxurm { height: 18px; left: calc(50.00000000000002% - 18px / 2); top: calc(50.00000000000002% - 18px / 2); width: 18px; }",
  ".framer-dbb64.framer-v-faasa8 .framer-6vbass { height: 24px; left: calc(50.00000000000002% - 24px / 2); top: calc(47.3684210526316% - 24px / 2); width: 24px; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 28
 * @framerIntrinsicWidth 28
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"d3VmZ3h0G":{"layout":["fixed","fixed"]},"mwAWKWohd":{"layout":["fixed","fixed"]},"sBo34Uare":{"layout":["fixed","fixed"]},"vlYcngcin":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerIZbUeNBW6 = withCSS(Component, css, "framer-dbb64");
export default FramerIZbUeNBW6;
FramerIZbUeNBW6.displayName = "Stars";
FramerIZbUeNBW6.defaultProps = { height: 28, width: 28 };
addPropertyControls(FramerIZbUeNBW6, {
  variant: {
    options: ["so6iT3IIO", "d3VmZ3h0G", "mwAWKWohd", "sBo34Uare", "vlYcngcin"],
    optionTitles: [
      "Variant 1",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Inactive",
    ],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(FramerIZbUeNBW6, [{ explicitInter: true, fonts: [] }], {
  supportsExplicitInterCodegen: true,
});
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerIZbUeNBW6",
      slots: [],
      annotations: {
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "28",
        framerIntrinsicWidth: "28",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"d3VmZ3h0G":{"layout":["fixed","fixed"]},"mwAWKWohd":{"layout":["fixed","fixed"]},"sBo34Uare":{"layout":["fixed","fixed"]},"vlYcngcin":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./IZbUeNBW6.map
