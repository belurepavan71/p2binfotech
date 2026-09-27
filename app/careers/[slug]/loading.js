export default function Loading() {
  return (
    <div className="min-h-screen bg-paper pt-[120px] pb-24 md:pt-[152px]">
      <div className="container-content max-w-[760px]">
        <div className="h-4 w-24 rounded-full bg-line animate-pulse" />
        <div className="h-3.5 w-20 rounded-full bg-line animate-pulse mt-8" />
        <div className="h-9 w-[80%] rounded-lg bg-line animate-pulse mt-3" />
        <div className="h-4 w-64 rounded-full bg-line animate-pulse mt-5" />
        <div className="h-12 w-44 rounded-full bg-line animate-pulse mt-8" />
        <div className="space-y-3 mt-14">
          <div className="h-4 w-full rounded-full bg-line animate-pulse" />
          <div className="h-4 w-[90%] rounded-full bg-line animate-pulse" />
          <div className="h-4 w-[75%] rounded-full bg-line animate-pulse" />
        </div>
      </div>
    </div>
  );
}
