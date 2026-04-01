"use client";

import { useState } from "react";
import Image from "next/image";

type ShopPhotoLightboxImageProps = {
  src: string;
  alt: string;
  allPhotos: string[];
};

export function ShopPhotoLightboxImage({ src, alt, allPhotos }: ShopPhotoLightboxImageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sourceIndex = allPhotos.indexOf(src);

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
      <button
        type="button"
        onClick={() => setOpenIndex(sourceIndex >= 0 ? sourceIndex : 0)}
        className="rounded-2xl bg-background min-h-32 p-1 w-full flex items-center justify-center text-center"
        aria-label="Open shop landscape photo"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="h-auto w-full rounded-xl object-cover cursor-pointer"
        />
      </button>

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
                alt={alt}
                width={1400}
                height={900}
                className="max-h-[85vh] max-w-[85vw] h-auto w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
