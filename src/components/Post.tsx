import React from "react";
import styles from "../../styles/Components/Post.module.css";
import img from "../../assets/CodeX.png";
import poster from "../../assets/poster.jpg";
import Image from "next/image";
import heart from "../../assets/heart-thin-icon.svg";
import reg from "../../assets/plus-round-line-icon.svg";
import share from "../../assets/instagram-share-icon.svg";
export const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sender}>
          <div className={styles.icon}>
            <Image src={img} />
          </div>
          <div className={styles.clubname}>
            <p>
              Codex_GITAM <span className={styles.timestamp}> · 1d</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.poster}>
        <Image src={poster} width={"400px"} height={"400px"} />
      </div>
      <div className={styles.stats}>
        <p className={styles.likecount}>
          <span className={styles.liked}>♥</span> 125
        </p>
        <p className={styles.registered}>200 registrations</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.buttons}>
          <button>
            <Image src={heart} width={"20px"} height={"20px"} />{" "}
            <span className={styles.btntext}>Like</span>
          </button>
          <button>
            <Image src={reg} width={"20px"} height={"20px"} />{" "}
            <span className={styles.btntext}>Register</span>
          </button>
          <button>
            <Image src={share} width={"20px"} height={"20px"} />{" "}
            <span className={styles.btntext}>Share</span>
          </button>
        </div>
        <div className={styles.description}>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Event Description
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Empowering Your Online Presence: A Roadmap to Mastering
                  Backend Development Any website or applications backend is its
                  structural support, allowing it to function and provide
                  consumers with value. A backend developer roadmap can aid
                  ambitious programmers in learning about fundamental ideas like
                  database administration, API design, security, scalability,
                  and cutting-edge technologies like serverless computing and
                  containerization. If you need any assistance while learning
                  these skills, do not hesitate to reach out to us for help and
                  guidance!😊
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
