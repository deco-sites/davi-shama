import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Paragraph {
  /**
   * @format textarea
   */
  text: string;
}

export interface LinkGroup {
  label: string;
  links: Link[];
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Props {
  picture: LiveImage;
  title: string;
  paragraphs: Paragraph[];
  button: {
    label: string;
    /**
     * @format url
     */
    href: string;
  };
  linkGroups: LinkGroup[];
}

export default function AboutContent({
  picture,
  title,
  paragraphs,
  button,
  linkGroups,
}: Props) {
  return (
    <div class="container mx-auto flex mt-[138px] px-20">
      <div class="flex-none w-[425px]">
        <img
          src={picture}
          alt={title}
          decoding="async"
          loading="lazy"
          width={278}
          height={260}
        />
      </div>
      <div class="flex-auto">
        <h1 class="text-5xl font-medium mb-7">{title}</h1>
        <div>
          {paragraphs.map((paragraph) => (
            <p class="mb-7 text-xl text-subdued">{paragraph.text}</p>
          ))}
        </div>
        <div class="pt-5">
          <a
            href={button.href}
            class="inline-block bg-black text-white px-7 py-5"
          >
            {button.label}
          </a>
        </div>
        <div class="flex text-xl mt-28">
          {linkGroups.map((group) => (
            <div class="flex-none w-1/2">
              <h2 class="font-medium">{group.label}</h2>
              {group.links.map((link) => (
                <a
                  class="flex items-baseline gap-2 mt-4 text-subdued"
                  href={link.href}
                  target={link.external ? "_blank" : ""}
                >
                  <div>{link.label}</div>
                  {link.external && (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7019 3.358L2.39151 11.6767L1.334 10.6133L9.64704 2.29838L10.0737 1.87163H9.47024L3.94088 1.87163V0.249535L12.7505 0.249535V9.06594H11.1288V3.53469V2.93071L10.7019 3.358Z"
                        fill="black"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}