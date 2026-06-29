interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-4",
};

export default function Spinner({ size = "md" }: SpinnerProps) {
  return (
    <div
      className={`${sizes[size]} rounded-full border-white/20 border-t-violet-500 animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}
