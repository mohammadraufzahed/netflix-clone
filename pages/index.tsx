import SpecialBox from "components/SpecialBox";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/app.svg";
import classes from "styles/pages/index/index.module.scss";
import TvImage from "public/images/assets/tv.png";
import KidsTvImage from "public/images/assets/kids_tv.png";
import MultiDeviceImage from "public/images/assets/device-pile.png";
import MobileImage from "public/images/assets/mobile.jpg";
import BoxImage from "public/images/assets/boxshot.png";
import DownloadingGif from "public/images/assets/download-icon.gif";

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
      <div style={{ clear: "both" }}></div>
      <main>
        <SpecialBox position="left" className={classes.box}>
          <>
            <div className={classes.title}>
              <h1>Enjoy on your TV.</h1>
              <h2>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h2>
            </div>
            <div className={classes.tv_box}>
              <Image src={TvImage} />
              <div className={classes.video}>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                  <source src="/videos/video-tv-0819.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
          </>
        </SpecialBox>
        <SpecialBox className={classes.box} position="right">
          <>
            <div className={classes.title}>
              <h1>Download your shows to watch offline.</h1>
              <h2>
                Save your favorites easily and always have something to watch.
              </h2>
            </div>
            <div className={classes.mobile}>
              <Image src={MobileImage} />
              <div className={classes.download_dialog}>
                <Image className={classes.download_cover} src={BoxImage} />
                <div className={classes.download_title}>
                  <span>Stranger Things</span>
                  <span>Downloading...</span>
                </div>
                <Image src={DownloadingGif} />
              </div>
            </div>
          </>
        </SpecialBox>
        <SpecialBox className={classes.box} position="left">
          <>
            <div className={classes.title}>
              <h1>Watch everywhere.</h1>
              <h2>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </h2>
            </div>
            <div className={classes.multi_device}>
              <Image src={MultiDeviceImage} />
              <div className={classes.video}>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                  <source src="/videos/video-devices.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
          </>
        </SpecialBox>
        <SpecialBox className={classes.box} position="right">
          <>
            <div className={classes.title}>
              <h1>Create profiles for kids.</h1>
              <h2>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h2>
            </div>
            <div>
              <Image src={KidsTvImage} />
            </div>
          </>
        </SpecialBox>
      </main>
    </div>
  );
};

export default Home;
