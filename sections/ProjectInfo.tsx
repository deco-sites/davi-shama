import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  /**
   * @format textarea
   */
  text: Paragraph[];
  hasBorder?: boolean;
}

export interface Paragraph {
  /**
   * @format textarea
   */
  text: string;
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
      <div class="flex-none w-[724px] text-subdued flex flex-col gap-6 leading-[1.7]">
        {
          text.map(p => {
            return (
              <p>{p.text}</p>
            )
          })
        }
      </div>
    </div>
  );
}
