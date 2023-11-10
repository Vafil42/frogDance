import { style } from "@vanilla-extract/css";

export const buttonStyles = style({
    padding: 10,
    paddingBottom: 12,
    backgroundColor: "#0034AC",
    border: "none",
    borderRadius: 10,
    boxShadow: "1px 1px 4px black",
    color: "white",
    ":hover": {
        backgroundColor: "#5085FF"
    },
    ":active": {
        padding: 8,
        paddingBottom: 10,
        margin: 2,
    }
})