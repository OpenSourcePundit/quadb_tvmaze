import React, { useState } from "react";
import "./modal.css";

const Modal = ({ show }) => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    showDate: "",
    showTime: "",
    numberOfTickets: "",
    phoneNumber: "",
    email: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("showFormData", JSON.stringify(formData)); // Save formData to localStorage
    localStorage.setItem("showId", show.id);
    // Reset form after submission
    setFormData({
      showDate: "",
      showTime: "",
      numberOfTickets: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <>
      <button
        className="btn-modal btn btn-outline-success"
        onClick={toggleModal}
      >
        Book Tickets
      </button>

      {modal && (
        <div className="Modal">
          <div className="Overlay" onClick={toggleModal}></div>
          <div className="modal-content">
          <h3>Book Tickets for {show?.name}</h3>
              <hr />
              <br />
            <form onSubmit={handleSubmit}>
             
              <div className="mb-3">
        <strong>Premiere:</strong> {show?.premiered ? show?.premiered : "N/A"}
      </div>
      <div className="mb-3">
        <strong>Rating:</strong> {show?.rating?.average} {show?.rating?.average ? show?.rating?.average : "N/A"}
      </div>
      <div className="mb-3">
        <strong>Runtime:</strong> {show?.runtime ? show?.runtime : "N/A"}
      </div>

              <div className="mb-3">
                <label htmlFor="showDate" className="form-label">
                  Show Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="showDate"
                  name="showDate"
                  value={formData.showDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="showTime" className="form-label">
                  Show Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="showTime"
                  name="showTime"
                  value={formData.showTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="numberOfTickets" className="form-label">
                  Number of Tickets
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numberOfTickets"
                  name="numberOfTickets"
                  value={formData.numberOfTickets}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <button
              type="button" 
              className="btn-close close-modal"
              aria-label="Close"
              onClick={toggleModal}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
