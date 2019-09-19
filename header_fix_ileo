import { Data, Override, motionValue, useTransform, animate } from "framer"

// Keep track of the state of our application
const data = Data({ isPastLimit: false })

// Create a MotionValue to track contentOffsetY
const contentOffsetY = motionValue(0)

// Listen for changes to contentOffsetY
contentOffsetY.onChange(offset => (data.isPastLimit = offset < -52))

// Apply this override to your scroll component
export function TrackScroll(): Override {
    return { contentOffsetY: contentOffsetY }
}

// Apply this override to your app bar
export function AppBar(): Override {
    const height = useTransform(contentOffsetY, [0, -52, -52], [140, 88, 88], {
        clamp: false,
    })

    return {
        height: height,
    }
}

export function ShowTitleIfPastLimit(): Override {
    return {
        opacity: 0, // set it to zero initially
        animate: data.isPastLimit ? { opacity: 1 } : { opacity: 0 },
        // animate.easeOut(data.tabLeft, -375 * i, { duration: 0 })
    }
}
