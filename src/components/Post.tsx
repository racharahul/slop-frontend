import React, { useState } from "react";
import styles from "../../styles/Components/Post.module.css";
import img from "../../assets/CodeX.png";
import poster from "../../assets/poster.jpg";
import Image from "next/image";
import likeIcon from "../../assets/heart-thin-icon.svg";
import registerIcon from "../../assets/plus-round-line-icon.svg";
import LikedIcon from "../../assets/heart-icon.svg";
import share from "../../assets/instagram-share-icon.svg";
import Event from "@/data/Event";
import api from "../util/api";
import { AuthContext } from "./authProvider";
import Link from "next/link";
import { getImageLink } from "@/util/image";
import { Moment } from "moment";

export const EventPost: React.FC<{
  event: Event;
}> = ({ event: defEvent }) => {
  const authContext = React.useContext(AuthContext);
  const [event, setEvent] = useState(defEvent);
  const getDaysAgo = (date: Moment) => {
    const diff = new Date().getTime() - date.toDate().getTime();
    return `${Math.round(diff / (1000 * 60 * 60 * 24))}d ago`;
  };
  const onUserEventInteraction = async (
    eventSlug: string,
    interactionType: string,
    effect: boolean = true
  ) => {
    const url =
      `events/${eventSlug}/user/${authContext.userId}/interaction?action=${interactionType}` +
      (!effect ? `&effect=${effect}` : "");
    const res = await api.post(
      url,
      {},
      { headers: { Authorization: `Bearer ${authContext.authState}` } }
    );
    if (res.status === 200) {
      setEvent((prevEvent) => {
        if (interactionType === "LIKED") {
          return {
            ...prevEvent,
            liked: !prevEvent.liked,
            numberOfLikes: prevEvent.numberOfLikes + (effect ? 1 : -1),
          };
        }
        if (interactionType === "REGISTERED") {
          return {
            ...prevEvent,
            registered: !prevEvent.registered,
            numberOfRegistrations:
              prevEvent.numberOfRegistrations + (effect ? 1 : -1),
          };
        }

        return {
          ...prevEvent,
          numberOfShares: prevEvent.numberOfShares + 1,
        };
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sender}>
          <div className={styles.icon}>
            <Image
              src={getImageLink(event.clubProfilePicture)}
              height={100}
              width={100}
            />
          </div>
          <Link href={`/clubs/${event.clubSlug}`}>
            <a>
              <div className={styles.clubname}>
                <p>
                  {event.clubName}{" "}
                  <span className={styles.timestamp}>
                    {" "}
                    · {getDaysAgo(event.createdAt)}
                  </span>
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.poster}>
        <Link href={`/events/${event.slug}`}>
          <a>
            <Image
              src={getImageLink(event.poster)}
              width={"400px"}
              height={"400px"}
            />
          </a>
        </Link>
      </div>
      <div className={styles.stats}>
        <p className={styles.likecount}>
          <span className={styles.liked}>♥</span> {event.numberOfLikes}
        </p>
        <p className={styles.registered}>
          {event.numberOfRegistrations} registrations
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.buttons}>
          <button
            onClick={async () =>
              await onUserEventInteraction(event.slug, "LIKED", !event.liked)
            }
          >
            <Image
              src={event.liked ? LikedIcon : likeIcon}
              width={"20px"}
              height={"20px"}
            />{" "}
            <span className={styles.btntext}>Like</span>
          </button>
          <button
            onClick={async () =>
              await onUserEventInteraction(
                event.slug,
                "REGISTERED",
                !event.registered
              )
            }
          >
            <Image src={registerIcon} width={"20px"} height={"20px"} />{" "}
            <span className={styles.btntext}>Register</span>
          </button>
          <button
            onClick={async () =>
              await onUserEventInteraction(event.slug, "SHARED")
            }
          >
            <Image src={share} width={"20px"} height={"20px"} />{" "}
            <span className={styles.btntext}>Share</span>
          </button>
        </div>
        <div className={styles.description}>
          <div className="accordion" id={event.slug + "1"}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + event.slug}
                  aria-expanded="false"
                  aria-controls={event.slug}
                >
                  Event Description
                </button>
              </h2>
              <div
                id={event.slug}
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent={"#" + event.slug + "1"}
              >
                <div className="accordion-body">{event.briefDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
