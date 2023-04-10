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
    paragraphs: Paragraph[]
    button: {
        label: string;
        /**
        * @format url
        */
        href: string;
    };
    linkGroups: LinkGroup[]
}

export default function AboutContent({
  picture,
  title,
  paragraphs,
  button,
  linkGroups,
}: Props) {
  return (
    <div class="container mx-auto flex">
      <div class="flex-none">Picture</div>
      <div class="flex-auto">
        <div>{title}</div>
        <div>
            {
                paragraphs.map(paragraph => (
                    <div>{paragraph.text}</div>
                ))
            }
        </div>
        <div>
            <a href={button.href}>{button.label}</a>
        </div>
        <div class="flex">
            {
                linkGroups.map(group => (
                    <div>
                        <div>{group.label}</div>
                        {
                            group.links.map(link => (
                                <a class="block" href={link.href} target={link.external ? '_blank' : ''}>
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
