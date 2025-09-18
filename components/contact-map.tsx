export function ContactMap() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.8234567890123!2d-3.0456789012345678!3d53.8123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1234567890ab%3A0x1234567890abcdef!2s9%20Alexandra%20Rd%2C%20Blackpool%20FY1%206BU%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Redstone Guest House Location"
        className="w-full h-full"
      />
    </div>
  )
}
