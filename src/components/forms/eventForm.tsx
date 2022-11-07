import React from "react";
import Event from "../../data/Event";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import moment from "moment";

const EventForm: React.FC<{
  event: Event;
  setEvent: React.Dispatch<React.SetStateAction<Event>>;
  onFormSubmit: () => Promise<void>;
}> = ({ event, setEvent, onFormSubmit }) => {
  const [error, setError] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const errorWidget = (errMessage: string) => (
    <div className="text-danger text-info">{errMessage}</div>
  );
  const widget = (
    <div className="border rounded-5 p-5">
      <div className="mb-3">
        <h1>Create An Event</h1>
        <br />
        <label htmlFor="Event Name" className="form-label">
          Event Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Event Name"
          placeholder="Event Name"
          defaultValue={event.name}
          onChange={(e) => {
            setEvent((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        {error.name ? errorWidget(error.name) : <></>}
      </div>

      <div className="mb-3">
        <label htmlFor="Event URL" className="form-label">
          Slug
        </label>
        <input
          type="text"
          className="form-control"
          id="Event URL"
          placeholder="event-slug"
          defaultValue={event.slug}
          onChange={(e) => {
            const { value } = e.target;
            setEvent((prev) => {
              return { ...prev, slug: value };
            });
          }}
        />
        {error.slug ? errorWidget(error.slug) : <></>}
        <br />

        <div className="mb-3">
          <label htmlFor="Brief Description" className="form-label">
            Brief Description
          </label>
          <input
            type="text"
            className="form-control"
            id="Brief Description"
            placeholder="Brief Description"
            defaultValue={event.briefDescription}
            onChange={(e) => {
              const { value } = e.target;
              setEvent((prev) => {
                return { ...prev, briefDescription: value };
              });
            }}
          />
        </div>
        {error.briefDescription ? errorWidget(error.briefDescription) : <></>}
      </div>
      <div className="mb-3">
        <label htmlFor="Event Description" className="form-label">
          Event Description
        </label>
        <textarea
          className="form-control"
          id="Event Description"
          placeholder="Event Description"
          defaultValue={event.descriptionMd}
          onChange={(e) => {
            const { value } = e.target;
            setEvent((prev) => {
              return { ...prev, descriptionMd: value };
            });
          }}
        />
        {error.descriptionMd ? errorWidget(error.descriptionMd) : <></>}
      </div>
      <div className="mb-3">
        <label htmlFor="Event Time" className="form-label" id="form_time">
          Strat Date & Time
        </label>
        <Flatpickr
          className="form-control"
          data-enable-time
          defaultValue={
            event.startTime ? event.startTime.toISOString() : event.startTime
          }
          onChange={([date]) => {
            setEvent((prev) => {
              return { ...prev, startTime: moment(date) };
            });
          }}
        />
        {error.startTime ? errorWidget(error.startTime) : <></>}
      </div>
      <div className="mb-3">
        <label htmlFor="Event Time" className="form-label" id="form_time">
          End Date & Time
        </label>
        <Flatpickr
          className="form-control"
          data-enable-time
          min={
            event.startTime ? event.startTime.toISOString() : event.startTime
          }
          defaultValue={
            event.endTime ? event.endTime.toISOString() : event.endTime
          }
          onChange={([date]) => {
            setEvent((prev) => {
              return { ...prev, endTime: moment(date) };
            });
          }}
        />
        {error.endTime ? errorWidget(error.endTime) : <></>}
      </div>
      {typeof error === typeof "" ? errorWidget(error) : <></>}
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          setLoading(true);
          console.log(event);
          onFormSubmit()
            .catch((err) => {
              try {
                const errObject = JSON.parse(err.message);
                setError(errObject);
              } catch (e) {
                setError(err.message);
              }
            })
            .finally(() => setLoading(false));
        }}
      >
        {loading ? (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
  return widget;
};

export default EventForm;
