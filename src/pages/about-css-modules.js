import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"
console.log(styles);
//Skapar ett nytt objek
const User = props => (
    //Som klass name vi anjer  klassen som drars från style filen.
    <div className={styles.user} id={props.id}>
      {/* Anger olika propertyis som skall komma in senare vid anrop */}
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>

    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://panels-images.twitch.tv/panel-93332837-image-1541fcd9-9736-476b-a236-8d40fb83cc2e"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)





