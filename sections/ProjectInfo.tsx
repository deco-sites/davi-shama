import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  /**
   * @format textarea
   */
  text: Paragraph[];
  removeGap?: boolean;
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
  hasBorder,
  removeGap,
}: Props) {
  return (
    <div
      class={`container mx-auto flex py-[100px] ${
        hasBorder && "border-b border-b-subdued"
      }`}
    >
      <div class="flex-none font-medium text-2xl leadint-[1.4] pl-[125px] w-[375px]">
        <div class="w-[170px]">{title}</div>
      </div>
      <div class={`${removeGap ? '' : 'gap-6'} flex-none text-xl w-[724px] text-subdued flex flex-col leading-[1.7]`}>
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
