import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  alt: string;
  image?: LiveImage;
}

export interface Bg {
  color: string;
}

export interface Props {
  type: "Full" | "Double";
  banners: Banner[];
  bgColors?: Bg[];
}

export default function Projects({
  type,
  banners,
  bgColors,
}: Props) {
  return (
    <>
      {type === "Full"
        ? (
          <div class={`container mx-auto bg-[#2D2128]`}>
            <Picture>
              <Source
                media="(min-width: 768px)"
                src={banners[0].image}
              />
              <img
                src={banners[0].image}
                alt={banners[0].alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </div>
        )
        : type === "Double"
        ? (
          <div class="container mx-auto flex gap-5 h-[774px]">
            <div
              class={`flex-auto flex items-center justify-center bg-[${
                bgColors[0].color
              }]`}
            >
              <Picture>
                <Source
                  media="(min-width: 768px)"
                  src={banners[0].image}
                />
                <img
                  src={banners[0].image}
                  alt={banners[0].alt}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            </div>
            <div
              class={`flex-auto flex items-center justify-center items-center bg-[${
                bgColors[1].color
              }]`}
            >
              <Picture>
                <Source
                  media="(min-width: 768px)"
                  src={banners[1].image}
                />
                <img
                  src={banners[1].image}
                  alt={banners[1].alt}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            </div>
          </div>
        )
        : ""}
    </>
  );
}
