import { style } from "@vanilla-extract/css"

export const auth = style({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: "1px 1px 4px black",
    borderRadius: 10,
    padding: 40,
    height: "90 90 90 10",
    width: 270,
    justifyContent: "center",
})

export const sec = style({
    marginLeft: "36.4%",
    marginTop: "17%",
    marginRight: "39%",
})

export const buttonStyles = style({
    width: "max-content",
    justifySelf: "center",
})
