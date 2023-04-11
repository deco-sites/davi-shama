import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  text: string;
  hasBorder?: boolean;
}

export default function ProjectInfo({
  title,
  text,
  hasBorder = true,
}: Props) {
  return (
    <div
      class={`container mx-auto flex py-[100px] ${
        hasBorder && "border-b border-b-subdued"
      }`}
    >
      <div class="flex-none text-xl pl-[125px] w-[375px]">{title}</div>
      <div class="flex-none w-[724px] text-subdued">
        {text}
      </div>
    </div>
  );
}
