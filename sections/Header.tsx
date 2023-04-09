import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Link {
  label: string;
  href: string;
}

export interface Props {
  avatar: LiveImage;
  links?: Link[];
}

export default function Header({
  avatar,
  links,
}: Props) {
  return (
    <div>
      <header class="flex items-center justify-between px-8 mt-3 fixed top-0 w-full z-30">
        <a href="/" class="flex gap-2 items-center">
          <img
            src={avatar}
            height="40"
            width="40"
            alt="Davi Shamá"
            decoding="async"
            loading="lazy"
          />
          Davi Shamá
        </a>
        <div class="flex gap-3">
          {links?.map(({ label, href }) => (
            <a class="block py-2 px-4 hover:underline" href={href}>{label}</a>
          ))}
        </div>
      </header>
      <div class="h-[40px]"></div>
    </div>
  );
}
