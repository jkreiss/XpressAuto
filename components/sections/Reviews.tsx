import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    text: "Very good experience there, work was efficient and for a good price. Our mechanic had the right diagnostic, repaired everything and in a very short time!\n" +
        "Afterwards he took the time to show us what he did and what we have to do to take care of our van :)\n" +
        "We arrived very stressed and left in peace, thank you!",
    author: "Cyrielle Sica",
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
  },
    {
    id: 6,
    text: "One of the best in te world. Honest and professional service! Could not recommend enough",
    author: "Oliver Smith",
    rating: 5
  },
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
    <section id="reviews" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4">
          <div className="text-left w-full sm:w-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-primary"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Testimonials</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-foreground">What Our Customers Say</h3>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors shadow-lg cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors shadow-lg cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
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
                  <div className="bg-card border border-border p-10 rounded-3xl h-full flex flex-col relative">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
                    <div className="flex gap-1.5 mb-8 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 text-xl font-medium leading-relaxed flex-grow mb-10 relative z-10">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-border">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xl border border-primary/20 shadow-inner">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-foreground font-bold text-lg">{review.author}</p>
                        <p className="text-primary/80 text-sm font-semibold tracking-wide">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-primary" : "w-2.5 bg-foreground/20 hover:bg-foreground/40"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
