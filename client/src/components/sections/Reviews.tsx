import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    text: "Very good experience there, work was efficient and for a good price.",
    author: "Anonymous",
    rating: 5
  },
  {
    id: 2,
    text: "Our mechanic had the right diagnostic, repaired everything and in a very short time! Afterwards he took the time to show us what he did and what we have to do to take care of our van :) We arrived very stressed and left in peace, thank you!",
    author: "Cyrielle Sica",
    rating: 5
  },
  {
    id: 3,
    text: "Fantastic place, we had an issue with our bumper on our car that morning. Called them an hour before to ask if someone can take a look, they said no problem. As soon as we arrived Steve came out, clipped the bumper within 5 mins. We were so grateful! An issue we really needed fixing and service was friendly, quick and easy. So thankful for these guys!",
    author: "Anna",
    rating: 5
  },
  {
    id: 4,
    text: "Very impressed with the service we received with our car, that had an issue with its steering. Scott diagnosed the issue very quickly and the work was done just as fast. Very professional and genuine service.",
    author: "Mitchell Job",
    rating: 5
  },
  {
    id: 5,
    text: "Was stranded in Ohakune with a dead car. Scott was awesome coming to help in quick fashion and was able to get us up and going quickly.",
    author: "Cherie Boggiss",
    rating: 5
  }
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-32 bg-card relative overflow-hidden">
      {/* Abstract Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Testimonials</h2>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">What Our Customers Say</h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {REVIEWS.map((review) => (
                <div 
                  key={review.id} 
                  className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%]"
                >
                  <div className="bg-white border-2 border-foreground/5 p-10 rounded-none h-full flex flex-col relative shadow-sm">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/5" />
                    <div className="flex gap-1.5 mb-8 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 text-xl font-medium leading-relaxed flex-grow mb-10 relative z-10 uppercase tracking-tight italic">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t-2 border-foreground/5">
                      <div className="w-14 h-14 rounded-none bg-primary/10 flex items-center justify-center text-primary font-black text-xl border-2 border-primary/20">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-foreground font-black uppercase text-lg">{review.author}</p>
                        <p className="text-primary/80 text-xs font-black uppercase tracking-widest">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8">
            <div className="flex gap-3">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-white/10 bg-background flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-white/10 bg-background flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex gap-3">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-primary" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 inline-flex items-center justify-center w-full">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white/70 text-sm font-semibold tracking-wide">
              More reviews coming soon – synced with Google Business.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}