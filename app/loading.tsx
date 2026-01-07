export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 rounded-full border-4 border-forest/20 border-t-forest animate-spin" />

        {/* Text */}
        <p className="font-display text-forest text-lg animate-pulse">
          Loading SatverraSpice…
        </p>
      </div>
    </div>
  );
}
