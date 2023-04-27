import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Animate from "deco-sites/davi-shama/islands/Animate.tsx";

export interface Banner {
  alt: string;
  image?: LiveImage;
  expand?: boolean;
  /**
   * @description Also adds a 30px mobile padding to x axis
   */
  padding?: {
    sm?: {
      top?: string;
      bottom?: string;
      xAxis?: string;
    },
    md?: {
      MdTop?: string;
      MdBottom?: string;
      xAxis?: string;
    },
    lg?: {
      LgTop?: string;
      LgBottom?: string;
      xAxis?: string;
    }
  }
  bgColor?: string;
  widthOnTablet?: string;
}

export interface Props {
  banners: Banner[];
}

export default function Projects({
  banners,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1"
  const elementId = `element${Math.floor(Math.random() * (200 - 110 + 1) + 110)}`

  return (
    <div class={`container mx-auto mb-5 flex flex-col gap-5 md:(flex-row)`}>
      {
        banners.map((banner, i) => (
          <div
            class={`md:(items-center justify-center flex w-auto px-0) delay-[300ms]
            ${banner.bgColor ? `bg-[${banner.bgColor}]` : ''}
            ${banner.expand ? `flex-auto` : `flex-none`}
            ${banner.widthOnTablet ? `md:w-[${banner.widthOnTablet}]` : ''}
            ${`pt-[${banner.padding?.sm?.top ? banner.padding.sm.top : '0'}]`}
            ${`pb-[${banner.padding?.sm?.bottom ? banner.padding.sm.bottom : '0'}]`}
            ${`md:pt-[${banner.padding?.md?.MdTop ? banner.padding.md.MdTop : '0'}]`}
            ${`md:pb-[${banner.padding?.md?.MdBottom ? banner.padding.md.MdBottom : '0'}]`}
            ${`lg:pt-[${banner.padding?.lg?.LgTop ? banner.padding.lg.LgTop : '0'}]`}
            ${`lg:pb-[${banner.padding?.lg?.LgBottom ? banner.padding.lg.LgBottom : '0'}]`}
            ${`px-[${banner.padding?.sm?.xAxis ? banner.padding.sm.xAxis : '0'}]`}
            ${`md:px-[${banner.padding?.md?.xAxis ? banner.padding.md.xAxis : '0'}]`}
            ${`lg:px-[${banner.padding?.lg?.xAxis ? banner.padding.lg.xAxis : '0'}]`}
          `}>
            <Animate id={[elementId + i]} remove={["opacity-0", "translate-y-5", "skew-y-1"]} event="elementVisible" />
            <div id={elementId + i} class={`${classes}`}>
              <Picture>
                <Source
                  src={banner.image}
                />
                <img
                  src={banner.image}
                  alt={banner.alt}
                  decoding="async"
                  srcset={`${banner.image} 2x`}
                />
              </Picture>
            </div>
          </div>
        ))
      }
    </div>
  );
}
