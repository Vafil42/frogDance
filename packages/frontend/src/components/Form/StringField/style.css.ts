import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
    display: "flex",
    flexDirection: "row",
})

export const inputStyles = style({
    borderStyle: "solid",
    borderColor: "#5E8FFF",
    borderRadius: 10,
    padding: 5,
    outline: "none",
})

export const placeholderStyles = style({
    width: 200,
    marginRight: 20,
})