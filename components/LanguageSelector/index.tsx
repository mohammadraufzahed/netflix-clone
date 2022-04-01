import classes from "styles/components/LanguageSelector/index.module.scss";

const LanguageSelector = () => {
  return (
    <div className={classes.lang_selector}>
      <select>
        <option defaultChecked>English</option>
        <option>Deutsch</option>
        <option>Francais</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
