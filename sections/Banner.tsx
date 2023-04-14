import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  alt: string;
  image?: LiveImage;
  expand?: boolean;
  /**
   * @format color
   */
  bgColor?: string;
  padding?: {
    top?: string;
    bottom?: string;
  }
}

export interface Props {
  banners: Banner[];
}

export default function Projects({
  banners,
}: Props) {
  return (
    <div class="container mx-auto flex gap-5 mb-5">
      {
        banners.map(banner => (
          <div
            class={`flex items-center justify-center
            ${banner.bgColor && `bg-[${banner.bgColor}]`}
            ${banner.expand ? `flex-auto` : `flex-none`}
            ${`pt-[${banner.padding?.top ? banner.padding.top : '0'}]`}
            ${`pb-[${banner.padding?.bottom ? banner.padding.bottom : '0'}]`}
          `}>
            <Picture>
              <Source
                media="(min-width: 768px)"
                src={banner.image}
              />
              <img
                src={banner.image}
                alt={banner.alt}
                decoding="async"
                loading="lazy"
                srcset={`${banner.image} 2x`}
              />
            </Picture>
          </div>
        ))
      }
    </div>
  );
}
