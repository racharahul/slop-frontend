import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import AuthComponent from "../../components/layout/authComp";
import React from "react";
import { AuthContext } from "../../components/authProvider";
import Header from "../../components/layout/header";
import api from "../../util/api";
import { toEventList } from "../../data/Event";
import Event from "../../data/Event";
import EventCard from "../../components/eventCard";

function Events() {
  const authContext = React.useContext(AuthContext);
  const [events, setEvents] = React.useState<Event[]>([]);
  React.useEffect(() => {
    fetch("/data")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const data = JSON.parse(res);
        const eventsRes = toEventList(data.data);
        console.log(eventsRes);
        setEvents((p) => {
          return [...eventsRes];
        });
      });
  }, []);
  const widget = (
    <div className="root" style={{ margin: "100px" }}>
      <Header pageName={"Events"} />
      {events.map((e) => (
        <EventCard event={e} key={e.id} />
      ))}
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Events;
