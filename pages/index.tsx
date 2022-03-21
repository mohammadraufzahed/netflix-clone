import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Logo from "public/app.svg";
import classes from "styles/pages/index/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Netflix</title>
      </Head>
      {/* Header Start */}
      <header className={classes.header}>
        <div className={classes.background}></div>
        {/* TopBar Start */}
        <div>
          <div className={classes.header_logo}>
            <Logo />
          </div>
          <div className={classes.menu}>
            <div className={classes.lang_selector}>
              <select>
                <option defaultChecked>English</option>
                <option>Deutsch</option>
                <option>Francais</option>
              </select>
            </div>
            <div className={classes.signin_button}>
              <Link href="/login" passHref>
                <button>Sign In</button>
              </Link>
            </div>
          </div>
        </div>
        {/* TopBar End*/}
        {/* Header Body Start*/}
        <div className={classes.header_body}>
          <h3 className={classes.title}>
            Unlimited movies, TV shows, and more.
          </h3>
          <p className={classes.subtitle}>Watch anywhere. Cancel anytime.</p>
          <p className={classes.subtitle}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
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
        </div>
        {/* Header Body End*/}
      </header>
      {/* Header End */}
    </div>
  );
};

export default Home;
