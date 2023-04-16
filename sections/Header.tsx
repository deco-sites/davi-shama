import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import ActiveLink from "deco-sites/start/islands/ActiveLink.tsx"

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
      <header class="flex items-center justify-between px-5 md:px-6 lg:px-8 mt-3 fixed top-2 w-full z-30">
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
            <a class="flex flex-col items-center py-2 hover:underline" href={href}>
              {label}
              <ActiveLink path={href} />
            </a>
          ))}
        </div>
      </header>
      <div class="h-[44px]"></div>
    </div>
  );
}
