import styles from "./Contact.module.css";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2 className={styles.title}>Contact Me</h2>
        <p>I'd love to hear from you! Please fill out the form below or connect with me on LinkedIn or Github:</p>
        <div className={styles.form}>
          <form>
            <label className={styles.label}>
              Name:
              <input type="text" name="name" className={styles.input} />
            </label>
            <label className={styles.label}>
              Email:
              <input type="email" name="email" className={styles.input} />
            </label>
            <label className={styles.label}>
              Message:
              <textarea name="message" className={styles.textarea}></textarea>
            </label>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
          </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/matt-nightingale-925639129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/linkedin.png"
              alt="LinkedIn"
              className={styles.linkedinIcon}
            />
          </a>
          <a
            href="https://github.com/MattNightingale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/github.png" alt="GitHub" className={styles.githubIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
