import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
    display: "flex",
    flexDirection: "row",
})

export const headerStyles = style({
    backgroundColor: "#0035B0",
    display: "flex",
    flexDirection: "column",
    width: 250,
    height: "100vh",
    fontSize: 40,
    color: "white",
    position: "fixed",
    boxShadow: "1px 0px 2px black",
    alignItems: "center"
})

export const titleStyles = style({
    width: "max-content",
    paddingTop: 30,
})

export const linksStyles = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 30,
})

export const linkStyles = style({
    textAlign: "center",
    textDecoration: "none",
    marginTop: 20,
    fontSize: 30,
    color: "whitesmoke",
    paddingBottom: 5,
    ":hover": {
        backgroundColor: "#2C5BC7"
    }
})

export const childStyles = style({
    marginLeft: 250,
    flex: "auto",
    minHeight: "100vh"
    // height: "100vh",
})