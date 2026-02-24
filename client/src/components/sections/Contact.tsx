import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-card to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Get In Touch</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-[1.1]">
              Ready to schedule an appointment?
            </h3>
            <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">
              Contact us today for a free quote or to book your next appointment.
              Only in town for a few days? We've got you covered.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Phone</h4>
                  <a href="tel:+64210774907" className="text-muted-foreground hover:text-primary transition-colors block text-lg font-medium">
                    0210 774 907
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Email</h4>
                  <a href="mailto:xpress_autos@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors block text-base sm:text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    xpress_autos@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=9+Seddon+Street,+Raetihi+4632,+New+Zealand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors block text-lg font-medium leading-relaxed"
                  >
                    9 Seddon Street<br />
                    Raetihi 4632
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Hours</h4>
                  <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                    Monday - Thursday: <br />7:30 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-black/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
            <h3 className="text-3xl font-black text-foreground mb-8">Send us a message</h3>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="registration" className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Registration Number</label>
                <input
                  type="registration"
                  id="registration"
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                  placeholder="ABC123"
                  data-testid="registration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none shadow-inner"
                  placeholder="How can we help you?"
                  data-testid="input-message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-black text-lg rounded-xl px-6 py-5 hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 mt-4"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}