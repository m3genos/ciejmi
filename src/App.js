
import { Download, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="CIE JMI Store"
        description="Buy, exchange & earn in-house. Explore the innovation inside the JMI community."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <Download />

      <div className="px-4 justify-center items-center flex-col text-center ">
        <p className={`${styles.pText} `}>Created by &nbsp;
          <span className="bold">&copy; Exatorial</span>
        </p>
      </div>
    </>
  );
}

export default App;
