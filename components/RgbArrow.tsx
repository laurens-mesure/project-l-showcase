import { ChevronDownIcon } from "@heroicons/react/solid";

export function RgbArrow() {
  return (
    <div className="relative h-[60px] w-[60px]">
      <ChevronDownIcon
        className="absolute top-0 left-0 -translate-x-0.5 -translate-y-px text-[#f00] mix-blend-difference"
        height={60}
        width={60}
      />
      <ChevronDownIcon
        className="absolute top-0 left-0 text-[#0f0] mix-blend-difference"
        height={60}
        width={60}
      />
      <ChevronDownIcon
        className="absolute top-0 left-0 translate-x-px translate-y-px text-[#00f] mix-blend-difference"
        height={60}
        width={60}
      />
    </div>
  );
}
