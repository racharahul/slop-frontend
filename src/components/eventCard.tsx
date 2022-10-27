import React from "react";
import Event from "../data/Event";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const widget = (
    <div className="card m-5">
      <style jsx>{`
        .card{
          
          width:25rem;
        }
      }
    `}</style>

      <div
        className=" text-bg mb-2 m-2"
        style={{ width: "70", textAlign: "center" }}
      >
        <div className="card-header">{event.clubName}</div>
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
        </div>
      </div>
    </div>
  );

  return widget;
};

export default EventCard;
