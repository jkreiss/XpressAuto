const tyreBrands = [
  "Coopers",
  "Maxxis",
  "Bridgestone",
  "Goodyear",
  "GT Radial",
  "Toyo",
  "Hankook",
  "Falken",
  "Kumho",
  "Michelin",
  "Pirelli",
  "Continental",
];

export function TyreBrandGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {tyreBrands.map((brand) => (
        <div
          key={brand}
          className="rounded-xl border border-border bg-background min-h-20 p-3 flex flex-col items-center justify-center text-center"
        >
          {/* TODO: Replace placeholder label with logo image from /public/images/tyre-brands/<brand>.png */}
          <span className="font-bold text-foreground text-sm"></span>
          <span className="text-xs text-muted-foreground mt-1">logo placeholder</span>
        </div>
      ))}
    </div>
  );
}
