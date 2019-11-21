import { Data, animate, Override, Animatable } from "framer"
// Override Docs: https://framer.com/docs/overrides

const data = Data({
    currentTab: null,
    tabLeft: Animatable(0),
    shortCutHide: false,
    notiHide: true,
    balanceShow: true,
    balanceHide: false,
})

let tabArray = []

export const tabButton: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    //if (data.currentTab === "id_ddtIngt_O") data.notiHide = false
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            //data.shortCutHide = false
            //data.notiHide = true
            data.currentTab = props.id
            let i = tabArray.findIndex(tab => {
                return data.currentTab === tab.props.id
            })
            console.log("hello")
            console.log(data.notiHide)
            animate.easeOut(data.tabLeft, -1440 * i, { duration: 0 })
        },
    }
}

export const shortCut: Override = props => {
    // let tabOpacity = 0.5
    return {
        onTap() {
            data.shortCutHide = true
            animate.easeOut(data.tabLeft, -375, { duration: 0 })
        },
    }
}

export const shortCutVisible: Override = props => {
    return {
        visible: data.shortCutHide,
    }
}

export const notiVisible: Override = props => {
    return {
        visible: data.notiHide,
    }
}

export const tabContianer: Override = props => {
    tabArray = props.children
}

export const tabView: Override = () => {
    return {
        left: data.tabLeft,
    }
}
export const bnShowBalance: Override = () => {
    return {
        onTap() {
            data.balanceShow = false
            data.balanceHide = true
        },
    }
}

export const bnHideBalance: Override = () => {
    return {
        onTap() {
            data.balanceHide = false
            data.balanceShow = true
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
