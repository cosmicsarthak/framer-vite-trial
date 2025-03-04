import*as Framer from "./components/framer.63TL3T73.mjs";
import*as React from "react";
import {createPortal} from "react-dom";
import*as ReactDOM from "react-dom/client";

const routes = {
    augiA20Il: {
        elements: {},
        page: Framer.lazy( () => import("https://framerusercontent.com/modules/aaXIaHDKwvBqVwfbTZfV/pYKK1zoQPoUBnzqIIGPs/augiA20Il.js")),
        path: "/"
    },
    PhmFSkovn: {
        page: Framer.lazy( () => import("https://framerusercontent.com/modules/f07B0qkwx977UmhKEVKV/I2wmgl6goUVUWhAZcGgc/PhmFSkovn.js"))
    }
}
const locales = [{
    code: "en-US",
    id: "default",
    name: "English",
    slug: ""
}]

export async function getPageRoot({routeId, pathVariables, localeId}) {
    // We don't want the initial render to immediately have to suspend.
    await routes[routeId].page.preload()

    const content = React.createElement(Framer.PageRoot, {
        isWebsite: true,
        routeId,
        pathVariables,
        routes,
        collectionUtils: {},
        framerSiteId: "2bd4e40d5e5364df5b9e52e853728b145f4fb640ffe3f594ad9071d5f909caf7",
        isReducedMotion: undefined,
        localeId,
        locales,
        preserveQueryParams: undefined,
        EditorBar: typeof window === "undefined" ? undefined : Framer.lazy(async () => {
                const {createEditorBar} = await import("https://edit.framer.com/init.mjs")
                return {
                    default: createEditorBar({
                        dependencies: {
                            __version: 1,
                            framer: {
                                useCurrentRoute: Framer.useCurrentRoute,
                                useLocaleInfo: Framer.useLocaleInfo,
                                useRouter: Framer.useRouter
                            },
                            react: {
                                createElement: React.createElement,
                                memo: React.memo,
                                useCallback: React.useCallback,
                                useEffect: React.useEffect,
                                useRef: React.useRef,
                                useState: React.useState
                            },
                            'react-dom': {
                                createPortal
                            }
                        }
                    })
                }
            }
        ),

    })

    const contentWithFeaturesContext = React.createElement(Framer.LibraryFeaturesProvider, {
        children: content,
        value: {
            codeBoundaries: true,
            editorBarSubtle: false,
            enableAsyncURLUpdates: true,
            pauseOffscreen: true,
            replaceNestedLinks: true,
            showAdvancedAnalytics: false,
            useGranularSuspense: true,
            wrapUpdatesInTransitions: true
        }
    })

    const contentWithGracefullyDegradingErrorBoundary = React.createElement(Framer.GracefullyDegradingErrorBoundary, {
        children: contentWithFeaturesContext
    })

    const page = React.createElement(Framer.PageEffectsProvider, {
        children: contentWithGracefullyDegradingErrorBoundary,
        value: {
            routes: {}
        }
    })

    return page
}

const isBrowser = typeof document !== "undefined"
if (isBrowser) {
    window.__framer_importFromPackage = (packageAndFilename, exportIdentifier) => () => {
        return React.createElement(Framer.ErrorPlaceholder, {
            error: 'Package component not supported: "' + exportIdentifier + '" in "' + packageAndFilename + '"'
        })
    }

    // A lot of libraries assume process.env.NODE_ENV is present in runtime/buildtime, so we are polyfilling it
    window.process = {
        ...window.process,
        env: {
            ...(window.process ? window.process.env : undefined),
            NODE_ENV: "production"
        }
    }

    window.__framer_events = window.__framer_events || []

    // Fallback support for stack gaps
    Framer.installFlexboxGapWorkaroundIfNeeded()

    const container = document.getElementById("main")
    // We know that #main is parsed before this script, so we don't need to wait for DOMContentLoaded or similar events.
    if ("framerHydrateV2"in container.dataset)
        main(true, container)
    else
        main(false, container)
}

function track() {
    if (!isBrowser)
        return
    window.__framer_events.push(arguments)
}

async function main(shouldHydrate, container) {
    function handleError(error, errorInfo, recoverable=true) {
        if (error.caught || window.__framer_hadFatalError)
            return
        // we already logged it

        const componentStack = errorInfo?.componentStack
        if (recoverable) {
            console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:\n", error, componentStack)
            // we only want to collect 1%, because this can be quite noisy (floods the data pipeline)
            if (Math.random() > 0.01)
                return
        } else {
            console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/")
        }
        track(recoverable ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(error),
            componentStack,
            // componentStack is more useful
            stack: componentStack ? undefined : error instanceof Error && typeof error.stack === "string" ? error.stack : null,
        })
    }

    try {
        let routeId, localeId, pathVariables, breakpoints
        if (shouldHydrate) {
            const routeData = JSON.parse(container.dataset.framerHydrateV2)
            routeId = routeData.routeId
            localeId = routeData.localeId
            pathVariables = routeData.pathVariables
            breakpoints = routeData.breakpoints
        } else {
            const routeData = Framer.inferInitialRouteFromPath(routes, decodeURIComponent(location.pathname), true, locales)
            routeId = routeData.routeId
            localeId = routeData.localeId
            pathVariables = routeData.pathVariables
        }

        const page = await getPageRoot({
            routeId,
            localeId,
            pathVariables
        })
        if (shouldHydrate) {

            Framer.withPerformanceMarks("framer-rewrite-breakpoints", () => {
                    Framer.removeHiddenBreakpointLayersV2(breakpoints)
                    window.__framer_onRewriteBreakpoints?.(breakpoints)
                }
            )

            const startTransition = React.startTransition
            startTransition( () => {
                    Framer.markHydrationStart()
                    Framer.setInitialHydrationState()
                    if (true)
                        Framer.turnOffReactEventHandling()
                    ReactDOM.hydrateRoot(container, page, {
                        onRecoverableError: handleError
                    })
                }
            )
        } else {

            ReactDOM.createRoot(container, {
                onRecoverableError: handleError
            }).render(page)
        }
    } catch (error) {
        handleError(error, undefined, false)
        throw error
    }
}

