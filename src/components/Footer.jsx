import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <p className="footer-copy">{t.footer.copyright}</p>
    </footer>
  );
}
