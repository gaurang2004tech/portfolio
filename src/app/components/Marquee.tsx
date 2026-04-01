interface MarqueeProps {
  children: React.ReactNode;
  duration?: string;
}

export default function Marquee({ children, duration = "15s" }: MarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-(--animate-marquee)"
        style={{ animationDuration: duration }}
      >
        {children}
      </div>
    </div>
  );
}
