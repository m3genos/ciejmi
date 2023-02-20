import React from "react";
import styles from "../styles/Global";
import Button from "./Button";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={styles.flexCenter}>
        <div className={`${styles.subSection} flex-col text-center`}>
          <h1 className={`${styles.pText}`}>Scan the QR code or Press the button to download the app</h1>

          <img
            src="/qrcode.jpeg"
            alt="download_png"
            // className={styles.fullImg}
            className="w-1/2"
          />
          <Button hideDefault link="https://ciejmi-exatorial-ecomm.s3.ap-south-1.amazonaws.com/production.apk" label="Download the App" />
        </div>
      </div>
    </div>
  );
};

export default Download;
