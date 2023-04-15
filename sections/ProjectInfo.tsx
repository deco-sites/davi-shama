import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  titleLine2?: string;
  /**
   * @format textarea
   */
  text?: Paragraph[];
  metrics?: Metric[];
  removeGap?: boolean;
  hasBorder?: boolean;
}

export interface Paragraph {
  /**
   * @format textarea
   */
  text: string;
}

export interface Metric {
  number: string;
  text: string;
}

export default function ProjectInfo({
  title,
  titleLine2,
  text,
  metrics,
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
        <div class="w-[170px]">
          <span class="block">{title}</span>
          { titleLine2 && <span class="block">{titleLine2}</span> }
        </div>
      </div>
      {
        text?.length > 0 && (
          <div class={`${removeGap ? '' : 'gap-6'} flex-none text-xl w-[724px] text-subdued flex flex-col leading-[1.7]`}>
            {
              text.map(p => {
                return (
                  <p>{p.text}</p>
                )
              })
            }
          </div>
        )
      }
      {
        metrics?.length > 0 && (
          <div class={`${removeGap ? '' : 'gap-x-6 gap-y-12'} -mt-1 flex-none text-xl w-[724px] grid grid-cols-2`}>
            {
              metrics.map(m => {
                return (
                  <div>
                    <div class="font-medium text-[72px] leading-[1.16] tracking-[-0.015em] flex">
                      <span>{m.number}</span>
                      <span class="text-[44px] pt-[1px]">%</span>
                    </div>
                    <div class="text-xl text-subdued leading-[1.7]">{m.text}</div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  );
}
