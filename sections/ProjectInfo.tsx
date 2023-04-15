import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  titleLine2?: string;
  /**
   * @format textarea
   */
  text?: Paragraph[];
  metrics?: Metric[];
  backedBy?: Brand[];
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

export interface Brand {
  image: LiveImage;
  alt: string;
}

export default function ProjectInfo({
  title,
  titleLine2,
  text,
  metrics,
  backedBy,
  hasBorder,
  removeGap,
}: Props) {
  return (
    <div
      class={`container mx-auto py-[100px] flex ${
        hasBorder && "border-b border-b-subdued"
      }`}
    >
      <div class="flex-none font-medium text-2xl leadint-[1.4] pl-[125px] w-[375px]">
        <div class="w-[170px]">
          <span class="block">{title}</span>
          { titleLine2 && <span class="block">{titleLine2}</span> }
        </div>
      </div>
      <div class="flex flex-col gap-12 w-[724px]">
        {
          text?.length > 0 && (
            <div class={`${removeGap ? '' : 'gap-6'} flex-none text-xl  text-subdued flex flex-col leading-[1.7]`}>
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
            <div class={`${removeGap ? '' : 'gap-x-6 gap-y-12'} -mt-1 flex-none text-xl grid grid-cols-2`}>
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
        {
          backedBy?.length > 0 && (
            <div class="flex flex-col gap-3">
              <div class="text-subsubdued leading-[1.7]">Backed by</div>
              <div class="flex gap-16 items-center">
                {
                  backedBy.map(brand => {
                    return (
                      <div>
                        <Picture>
                          <Source
                            media="(min-width: 768px)"
                            src={brand.image}
                          />
                          <img
                            src={brand.image}
                            alt={brand.alt}
                            decoding="async"
                            loading="lazy"
                            srcset={`${brand.image} 2x`}
                          />
                        </Picture>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
