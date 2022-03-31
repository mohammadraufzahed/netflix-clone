import classes from "styles/components/Newsletter/index.module.scss";

const Newsletter = () => {
  return (
    <form className={classes.form} onSubmit={(el) => el.preventDefault()}>
      <div className={classes.form_input}>
        <input
          id="email"
          aria-label="Email subscribe input"
          aria-placeholder="Email Address"
          placeholder=" "
        />
        <label
          className={classes.form_label}
          htmlFor="#email"
          onClick={(el) => {
            const input: HTMLInputElement | null | undefined =
              el.currentTarget.parentElement?.querySelector("#email");
            input?.focus();
          }}
        >
          Email Address
        </label>
      </div>
      <button className={classes.form_submit} type="submit">
        Get Started
      </button>
    </form>
  );
};

export default Newsletter;
