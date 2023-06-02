import ContactFormStyle from "./contact-form.module.css";

export default function ContactForm() {
  return (
    <section className={ContactFormStyle.contact}>
      <h1>How can I help you?</h1>
      <form className={ContactFormStyle.form}>
        <div className={ContactFormStyle.controls}>
          <div className={ContactFormStyle.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={ContactFormStyle.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={ContactFormStyle.control}>
          <label htmlFor="message">Your Email</label>
          <textarea id="message" rows="5"></textarea>
        </div>

        <div className={ContactFormStyle.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
