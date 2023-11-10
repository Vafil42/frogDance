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
})

export const sec = style({
    marginLeft: "36.4%",
    marginTop: "17%",
    marginRight: "39%",
})

export const but = style({
    paddingBottom: 12,
    height: 50,
    paddingTop: 10,
    width: 100,
    fontSize: 20,
    textAlign: "center",
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
export const butD = style({
    textAlign: "center", 
    marginTop: 21
})