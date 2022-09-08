import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <>
    <div className="contact">
      <h2>Let stay connected!</h2>
      <a href="https://ca.linkedin/taraluu">
        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
      </a>
      <a href="https://github.com/TaraLuu">
        <FontAwesomeIcon icon={faGithub} size="3x"/>
      </a>
    </div>
    </>
  )
}

export default Contact;