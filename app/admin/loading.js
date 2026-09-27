export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="h-[72px] border-b border-line" />
      <div className="container-content py-12">
        <div className="h-6 w-40 rounded-full bg-line animate-pulse" />
        <div className="h-4 w-56 rounded-full bg-line animate-pulse mt-3" />
        <div className="mt-10 border border-line rounded-2xl overflow-hidden">
          <div className="h-11 bg-paper-dim/60 border-b border-line" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-16 border-b border-line last:border-none flex items-center px-5">
              <div className="h-3.5 w-40 rounded-full bg-line animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
