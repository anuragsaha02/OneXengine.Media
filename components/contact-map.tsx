export function ContactMap() {
  return (
    <section className="h-[400px] w-full bg-muted">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28864.484679676514!2d92.55651721162902!3d24.684392695572932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e31be4a5bfb77%3A0x7f8c05eab5be4a4e!2sHailakandi%2C%20Assam!5e0!3m2!1sen!2sin!4v1706243184032!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale hover:grayscale-0 transition-all duration-300"
        title="OneXengine.Media Location"
      />
    </section>
  )
}

