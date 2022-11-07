import { useRouter } from "next/router";
import React from "react";
import { AuthContext } from "../../../components/authProvider";
import { toEvent } from "../../../data/Event";
import api from "../../../util/api";
import Event from "../../../data/Event";
import Header from "../../../components/layout/header";
import EventForm from "../../../components/forms/eventForm";
function Edit() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const [event, setEvent] = React.useState<Event>(undefined!);
  const eventSlug = React.useRef<string>();
  React.useEffect(() => {
    if (!router.isReady) return;
    eventSlug.current = router.query.eventSlug as unknown as string;
    api
      .get(`/events/${eventSlug.current}`, {
        headers: { Authorization: "Bearer " + authContext.authState },
      })
      .then((res) => {
        const event = toEvent(res.data);
        setEvent(event);
      });
  }, [router.isReady, authContext.authState, router.query.eventSlug]);
  const onFormSubmit = async () => {
    const res = await api.patch(`/events/${eventSlug.current}`, event, {
      headers: { Authorization: "Bearer " + authContext.authState },
    });
    if (res.status === 200) {
      const event = toEvent(res.data);
      setEvent(event);
      router.back();
    } else {
      if (res.data.errors) throw new Error(JSON.stringify(res.data.errors));
      else if (res.data.message) throw new Error(res.data.message);
    }
  };
  const widget = (
    <div style={{ margin: "100px" }}>
      <Header pageName={"Events"} />
      <EventForm
        event={event}
        setEvent={setEvent}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
  return event ? widget : <></>;
}
export default Edit;
