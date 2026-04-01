import Image from "next/image";

const tyreBrands = [
  { name: "Maxxis", src: "/images/maxxis.png" },
  { name: "Cooper", src: "/images/cooper.png" },
  { name: "Michelin", src: "/images/michelin.png" },
  { name: "Bridgestone", src: "/images/bridgestone.png" },
  { name: "Goodyear", src: "/images/goodyear.png" },
  { name: "GT Radial", src: "/images/gtradial.png" },
  { name: "Toyo", src: "/images/toyo.png" },
  { name: "Hankook", src: "/images/hankook.png" },
  { name: "Kumho", src: "/images/kumho.png" },
  { name: "Pirelli", src: "/images/pirelli.png" },
  { name: "Continental", src: "/images/continental.jpeg" },
  { name: "BF Goodrich", src: "/images/bfgoodrich.png" },
];

export function TyreBrandGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {tyreBrands.map((brand) => (
        <div
          key={brand.name}
          className="rounded-xl bg-slate-300 h-25 p-3 flex flex-col items-center justify-center text-center opacity-95 hover:brightness-110 hover:opacity-100 transition-all"
        >
          <Image
            src={brand.src}
            alt={`${brand.name} logo`}
            width={140}
            height={56}
            className="h-auto w-50 object-contain "
          />
        </div>
      ))}
    </div>
  );
}
