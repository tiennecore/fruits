export const SET_ID = "SET_ID"
export const REVEAL = "REVEAL"
export const SET_THEME_ID = "SET_THEME_ID"

export const setId = idMenu => ({
    type:SET_ID,
    payload: idMenu
})

export const setThemeId = idTheme => ({
    type:SET_THEME_ID,
    payload: idTheme
})

export const reveal = hidden =>({
    type:REVEAL,
    hidden
})