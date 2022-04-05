import { react, useState } from 'react';
import Split from "../Split";



export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };

  return (
    <section className="contact-sec">
      <div className="container-fluid">
        <div className="sec-head custom-font text-center">
          <h6>
            Get In Touch
          </h6>
          <span className="tbg">Contact</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};


