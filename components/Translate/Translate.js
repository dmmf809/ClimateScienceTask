import { useRouter } from 'next/router';
import styles from '../../styles/Translate.module.css';
import en from './locales/en';
import fr from './locales/fr';

const Translate = () => {
  const router = useRouter();
  const { locale } = router;
  const language = locale === 'en' ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <nav className={styles.nav}>
      <select
        onChange={changeLanguage}
        defaultValue={language}
        className={styles.select}
      >
        <option value='en'>English</option>
        <option value='fr'>Français</option>
      </select>
    </nav>
  );
};

export default Translate;
