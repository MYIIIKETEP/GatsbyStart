import React from "react"
import Header from "../components/header"
import style from "../styles/div.module.css"
export default () => (
 <Header>
    <div className={style.fleft}>
    <img className={style.fimgMe} src="/images/Me.jpg"></img>
    </div>
    <div className={style.fright}>
        <p>Denis Jakusjv <br></br>
        23 år gammal



        </p>
    </div>
    </Header>
)