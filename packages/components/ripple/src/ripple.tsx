import { useRipple } from "./use-ripple";

const RippleInner: React.FC<RippleProps> = ({ x, y, size, duration }) => {
  return (
    <span
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "scale(0)",
        animation: `ripple-animation ${duration}ms linear`,
        pointerEvents: "none",
      }}
    />
  );
};

interface RippleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
}

export const Ripple = (props: Ripple.Props) => {
  const { ripples, handleRipple, isDisabled } = useRipple(props);
  const duration = 600;
  if (isDisabled) return null;
  return (
    <div
      className="size-full inset-0 z-1 overflow-hidden absolute"
      onClick={handleRipple}
      onMouseDown={handleRipple}
      onTouchStart={handleRipple}
    >
      {ripples.map((ripple) => (
        <RippleInner
          key={ripple.id}
          duration={duration}
          size={ripple.size}
          x={ripple.x}
          y={ripple.y}
        />
      ))}
    </div>
  );
};

export namespace Ripple {
  export interface Props extends useRipple.Props {}
}
