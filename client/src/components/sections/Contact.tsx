import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
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
            <p className="text-xl text-foreground/60 mb-12 font-medium leading-relaxed uppercase tracking-tight italic">
              Contact us today for a free quote or to book your next service. We're here to help keep your vehicle running safely.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-2 uppercase tracking-wide">Phone</h4>
                  <a href="tel:+1234567890" className="text-foreground/60 hover:text-primary transition-colors block text-lg font-black">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-2 uppercase tracking-wide">Email</h4>
                  <a href="mailto:info@xpressautomotive.com" className="text-foreground/60 hover:text-primary transition-colors block text-lg font-black break-all">
                    info@xpressautomotive.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-2 uppercase tracking-wide">Location</h4>
                  <p className="text-foreground/60 text-lg font-black leading-relaxed">
                    123 Mechanic Lane<br />
                    Auto City, AC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-2 uppercase tracking-wide">Hours</h4>
                  <p className="text-foreground/60 text-lg font-black leading-relaxed">
                    Mon-Fri: 8:00 AM - 5:30 PM<br />
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-none border-2 border-foreground/5 shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-black text-foreground mb-8 uppercase italic">Send us a message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-black tracking-widest text-foreground/80 uppercase">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-background border-2 border-foreground/10 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-all shadow-inner font-black uppercase"
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-black tracking-widest text-foreground/80 uppercase">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-background border-2 border-foreground/10 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-all shadow-inner font-black uppercase"
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black tracking-widest text-foreground/80 uppercase">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-background border-2 border-foreground/10 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-all resize-none shadow-inner font-black uppercase"
                  placeholder="How can we help you?"
                  data-testid="input-message"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground font-black text-xl rounded-none px-6 py-5 hover:translate-x-[4px] hover:translate-y-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none transition-all mt-4 uppercase tracking-widest"
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