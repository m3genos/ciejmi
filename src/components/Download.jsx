import React from "react";
import styles from "../styles/Global";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={styles.flexCenter}>
        <div className={`${styles.subSection} flex-col text-center`}>
          <img
            src="/qrcode.jpeg"
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
