import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
    display: "flex",
    flexDirection: "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    boxShadow: "1px 1px 4px black",
})

export const titleStyles = style({
    borderBottom: "3px solid",
    borderColor: "#0034AC",
    width: "max-content",
    marginBottom: 10,
    borderRadius: 2,
    fontSize: 20,
})