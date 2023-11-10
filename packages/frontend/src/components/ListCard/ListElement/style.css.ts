import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderLeft: "7px solid",
    borderRadius: 5,
    borderColor: "#5E8FFF",
    marginBottom: 20,
    justifyContent: "space-between"
})

export const hoverStyles = style({
    ":hover": {
        backgroundColor: "lightgray"
    }
})

export const titleStyles = style({
    fontSize: 20,
    color: "black",
})

export const fieldsStyles = style({
    alignSelf: "center",
    justifySelf: "flex-end",
    fontSize: 10,
    color: "gray",
})