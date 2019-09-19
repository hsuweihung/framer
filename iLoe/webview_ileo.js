import { Data, animate, Override, Animatable } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({
    webViewLeft: Animatable(0),
})
export const web_1: Override = props => {
    return {
        onTap() {
            animate.easeOut(data.webViewLeft, 0, { duration: 0 })
        },
    }
}

export const web_2: Override = () => {
    return {
        onTap() {
            animate.easeOut(data.webViewLeft, -375, { duration: 0 })
            opacity: 0
        },
    }
}

export const web_3: Override = () => {
    return {
        onTap() {
            animate.easeOut(data.webViewLeft, -750, { duration: 0 })
            opacity: 0
        },
    }
}

export const webView: Override = () => {
    return {
        left: data.webViewLeft,
    }
}
