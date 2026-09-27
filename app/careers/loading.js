export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="h-[72px]" />
      <div className="bg-paper-dim py-20 md:py-24">
        <div className="container-content">
          <div className="h-3.5 w-16 rounded-full bg-line animate-pulse" />
          <div className="h-10 w-[70%] max-w-[500px] rounded-lg bg-line animate-pulse mt-4" />
          <div className="h-4 w-[85%] max-w-[440px] rounded-full bg-line animate-pulse mt-6" />
        </div>
      </div>
      <div className="container-content py-20">
        <div className="space-y-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-xl bg-paper-dim animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
