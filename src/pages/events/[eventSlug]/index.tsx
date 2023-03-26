import React from "react";
import { useRouter } from "next/router";
import Header from "../../../components/layout/header";
import { AuthContext } from "../../../components/authProvider";
import api from "../../../util/api";
import Event, { toEvent } from "../../../data/Event";
import ReactMarkdown from "react-markdown";
import Countdown from "react-countdown";
import moment from "moment";
import Link from "next/link";

function EventViewPage() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const [event, setEvent] = React.useState<Event>(undefined!);
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (!router.isReady) return;
    const slug = router.query.eventSlug;
    api
      .get(`/events/${slug}`, {
        headers: { Authorization: "Bearer " + authContext.authState },
      })
      .then((res) => {
        if (res.status === 200) {
          setEvent(toEvent(res.data));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.isReady, router.query]);

  const widget = (event: Event) => {
    return (
      <div className="card m-5">
        <div className="text-center">
          <h1>{event.name}</h1>
          <Link href={`/clubs/${event.clubSlug}`}>
            <a>
              <h4>{event.clubName}</h4>
            </a>
          </Link>
          <p>Registered Users {event.numberOfRegistrations} </p>

          <hr />
          <button className="btn btn-success">
            Starts In <br />
            {event.startTime !== undefined &&
            event.startTime.isAfter(moment()) ? (
              <Countdown date={event.startTime.toDate()} />
            ) : (
              false
            )}
          </button>

          <h2>Description</h2>
          <ReactMarkdown>{event.descriptionMd}</ReactMarkdown>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header pageName={"Events"} />
      <div style={{ height: 50 }} />
      {loading && !event ? <>Loading</> : widget(event)}
    </div>
  );
}
export default EventViewPage;
