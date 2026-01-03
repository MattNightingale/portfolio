import styles from './Contact.module.css';
import { useNavigate } from 'react-router';


function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
      <button className={styles.closeButton} onClick={handleClose}>&times;</button>
      <h2 className={styles.title}>Contact Me</h2>
      <p>You can reach me via email at example@example.com.</p>
    </div>
    </div>
  );
}

export default Contact;