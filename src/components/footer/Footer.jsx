import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Harsha Rashmi</div>
      <div className={styles.text}>
        sinhaharsha2805@gmail.com © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
