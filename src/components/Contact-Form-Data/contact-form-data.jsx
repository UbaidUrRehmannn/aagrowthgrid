import React from "react";
import Link from "next/link";
// import featuresData from "../../data/sections/features.json";

const ContactFormData = ({ style, lines, data, heading }) => {
  const numberOfValues = data.length;
  const interval = 0.4; // Set the desired interval (in seconds)

  const newDelays = [];

  for (let i = 0; i < numberOfValues; i++) {
    const newDelay = (i * interval).toFixed(1) + "s";
    newDelays.push(newDelay);
  }
  return (
    <section className={`services bords section-padding-top  ${ style === "4item" ? "lficon" : lines ? "" : "" }`} >
      <div className="container">
        
        <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Timestamp</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.timestamp}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td><a className="cursor-pointer hover-underline-animation" target="_blank" rel="noreferrer" href={`mailto:${item.email}`}>{item.email}</a></td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </section>
  );
};

export default ContactFormData;
