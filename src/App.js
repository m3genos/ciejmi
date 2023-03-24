import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <div className={`min-h-screen ${styles.section} ${styles.bgPrimary} banner`}>
        <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
          <div className={`${styles.descDiv} fadeLeftMini ${styles.textLeft}`}>
            <h1 className={`${styles.whiteText} ${styles.h1Text}`}>CIE JMI Store</h1>
            <p className={`${styles.whiteText} ${styles.descriptionText}`}>Buy, exchange & earn in-house. Explore the innovation inside the JMI community.</p>

            <h1 className={`${styles.pText} text-center text-white`}>Scan the QR code or Press the button to download the app</h1>
            <div className='flex items-center justify-center gap-10'>
              <img src="/qrcode.jpeg" className="w-1/3" />
              <button
                className={`${styles.btnBlack} ${styles.btnText} font-bold text-sm`}
                onClick={() => window.open("https://ciejmi-exatorial-ecomm.s3.ap-south-1.amazonaws.com/production.apk", "_blank")}
              >
                Download the App
              </button>
            </div>
          </div>
          <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
            <img src={assets.homeHero} alt="mockup" className={`fadeRightMini ${styles.sectionImg}`} />
          </div>
        </div>
      </div>


      <div className="px-4 justify-center items-center flex-col text-center ">
        <p className={styles.pText}>Powered by &nbsp;
          <span className="bold">Exatorial</span>
        </p>
      </div>
    </>
  );
}

export default App;
