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
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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

export const Ripple = () => {
  const { ripples, handleRipple } = useRipple({ isCentered: false });
  const duration = 600;
  return (
    <div
      className="size-full inset-0 overflow-hidden absolute"
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

// export const Ripple = (props: Ripple.Props) => {
//   const { ref: refProp, ...elementProps } = props;
//   const ref = useRef<HTMLDivElement>(null);
//   const ripples = useRipple({ ref, isCentered: false });
//   const mergedRefs = useMergeRefs([refProp, ref]);

//   const renderElement = useRenderElement("span", {
//     props: [elementProps, { ref: mergedRefs }],
//   });
//   return renderElement;
// };

// export namespace Ripple {
//   export interface Props extends UIProps<"span"> {}
// }
