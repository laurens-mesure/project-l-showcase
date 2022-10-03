import { useRef } from "react";

interface Props {
  title: string;
}

export function NavItem({ title }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);

  function animation(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (!spanRef.current) return;

    const { offsetX: x, offsetY: y } = e.nativeEvent,
      { offsetHeight: height, offsetWidth: width } =
        e.currentTarget || e.target,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    spanRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave" || e.type === "mouseout")
      spanRef.current.style.transform = "";
  }

  return (
    <div
      className="cursor-pointer"
      onMouseLeave={(e) => animation(e)}
      onMouseMove={(e) => animation(e)}
    >
      <span
        className="relative inline-block w-min bg-neutral-100 px-10 py-6 transition-all dark:bg-neutral-900"
        ref={spanRef}
      >
        {title}
      </span>
    </div>
  );
}
