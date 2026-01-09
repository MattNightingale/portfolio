import styles from "./Contact.module.css";
import { useNavigate } from "react-router";
import { useState } from 'react';
import { SlideInFromTop } from "../../Components/Animations/Animations";

function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a57cf384-73b4-40b4-a8c2-5469e3b6d558");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  if (result === "Success!") {
    return (
      <div className={styles.wrapper}>
        <SlideInFromTop>
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
          <h2 className={styles.title}>Thank You!</h2>
          <p>Your message has been sent successfully, I endeavour to respond as soon as possible.</p>
        </div>
        </SlideInFromTop>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <SlideInFromTop>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.text}>
          I'd love to hear from you! Fill out the form below or connect
          with me on LinkedIn or Github:
        </p>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Name" required className={styles.input} />
            <input type="email" name="email" placeholder="Email" required className={styles.input} />
            <textarea name="message" placeholder="Message" required className={styles.textarea}></textarea>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
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
            <img
              src="assets/github.png"
              alt="GitHub"
              className={styles.githubIcon}
            />
          </a>
        </div>
      </div>
      </SlideInFromTop>
    </div>
  );
}

export default Contact;
