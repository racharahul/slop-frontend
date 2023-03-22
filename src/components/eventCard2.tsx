import React from "react";
import Image from "next/image";
import type { Event } from "../util/racha";
import {auto} from "@popperjs/core";
const EventCard2 = (props: {event : Event}) =>{
    const {event}=props;
    return(
        <div className="card p-3 my-4 shadow"  style={{maxWidth : "500px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src={event.eventBanner} className="img-fluid rounded-start m-1" alt="..."  width={"200px"} height={"300px"} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{event.eventName}</h5>
                        <p className="card-text">{event.eventDescription}</p>
                        <p className="card-text"><small className="text-muted">Event starts on {event.eventStart} and ends by {event.eventEnd}</small></p>
                        <button className="btn btn-light float-end">Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard2