import { style } from "@vanilla-extract/css";

export const titleStyles = style({
    paddingTop: 0,
    fontSize: 35,
})

export const subtitleStyles = style({
    fontSize: 12,
    color: "gray",
})

export const titlesStyles = style({
    display: "flex",
    flexDirection: "column"
})

export const wrapperStyles = style({
    display: "flex",
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    alignItems: "center",
})
