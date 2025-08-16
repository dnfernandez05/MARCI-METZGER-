import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        title="Marci Metzger Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.855267838269!2d-115.9552532!3d36.1842494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sus!4v1691789723045!5m2!1sen!2sus"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
