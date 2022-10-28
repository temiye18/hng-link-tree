import React from "react";
import shareDesktop from "../../assets/share_desktop.svg";
import shareMobile from "../../assets/share_mobile.svg";
import profileImg from "../../assets/profile_img.jpg";
import Container from "../Utilities/Container";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <section>
      <Container>
        <div className={classes.profile_box}>
          <div className={classes.profile_id}>
            <img src={profileImg} alt="user_image" />
            <h5>Temiye Akinyemi</h5>
          </div>
          <img
            src={shareDesktop}
            className={classes.desktop}
            alt="share_desktop"
          />
          <img
            className={classes.mobile}
            src={shareMobile}
            alt="share_mobile"
          />
        </div>
      </Container>
    </section>
  );
};

export default Profile;
