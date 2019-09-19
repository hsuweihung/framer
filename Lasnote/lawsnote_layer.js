import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    currentTab: null,
    balanceShow: true,
    balanceHide: false,
    balanceHide_2: false,
    balanceShow_circle: true,
    balanceHide_circle: true,
    balanceHide_2_circle: true,
})

export const bnShowBalance: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.balanceShow = true
            data.balanceHide = false
            data.balanceHide_2 = false
            data.balanceShow_circle = false
            data.balanceHide_circle = true
            data.balanceHide_2_circle = true
            data.currentTab = props.id
        },
    }
}

export const bnHideBalance: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.balanceHide = true
            data.balanceShow = false
            data.balanceHide_2 = false
            data.balanceShow_circle = true
            data.balanceHide_circle = false
            data.balanceHide_2_circle = true
            data.currentTab = props.id
        },
    }
}
export const bnHideBalance_2: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.balanceHide_2 = true
            data.balanceShow = false
            data.balanceHide = false
            data.balanceShow_circle = true
            data.balanceHide_circle = true
            data.balanceHide_2_circle = false
            data.currentTab = props.id
        },
    }
}
export const balanceH: Override = () => {
    return {
        visible: data.balanceHide,
    }
}

export const balanceS: Override = () => {
    return {
        visible: data.balanceShow,
    }
}
export const balanceH_2: Override = () => {
    return {
        visible: data.balanceHide_2,
    }
}

export const balanceH_circle: Override = () => {
    return {
        visible: data.balanceHide_circle,
    }
}

export const balanceH_2_circle: Override = () => {
    return {
        visible: data.balanceHide_2_circle,
    }
}

export const balanceS_circle: Override = () => {
    return {
        visible: data.balanceShow_circle,
    }
}
