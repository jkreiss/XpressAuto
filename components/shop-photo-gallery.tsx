"use client";

import { useState } from "react";
import Image from "next/image";

type ShopPhotoGalleryProps = {
  photos: string[];
  allPhotos: string[];
};

export function ShopPhotoGallery({ photos, allPhotos }: ShopPhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const showPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + allPhotos.length) % allPhotos.length);
  };

  const showNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % allPhotos.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {photos.map((photoSrc, index) => (
          <button
            key={photoSrc}
            type="button"
            onClick={() => setOpenIndex(allPhotos.indexOf(photoSrc))}
            className="rounded-2xl bg-background min-h-32 p-1 flex items-center justify-center text-center"
            aria-label={`Open shop photo ${index + 2}`}
          >
            <Image
              src={photoSrc}
              alt={`Shop photo ${index + 2}`}
              width={500}
              height={700}
              sizes="(min-width: 640px) 16vw, 100vw"
              className="w-full aspect-[3/4] rounded-xl object-cover cursor-pointer"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground border border-border text-xl font-bold"
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground border border-border text-2xl font-bold"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground border border-border text-2xl font-bold"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="h-full w-full overflow-auto p-6 md:p-10">
            <div
              className="min-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allPhotos[openIndex]}
                alt="Expanded shop photo"
                width={1200}
                height={1800}
                sizes="85vw"
                className="max-h-[85vh] max-w-[85vw] h-auto w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
