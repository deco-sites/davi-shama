import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Project {
  /**
   * @description Project title
   */
  label: string;
  comingSoon?: boolean;
  /**
   * @description Page slug
   */
  slug?: string;
  /**
   * @description Preview image
   */
  image?: LiveImage;
}

export interface Props {
  sectionTitle: string;
  projects: Project[];
}

export default function Projects({
  sectionTitle,
  projects,
}: Props) {
  return (
    <div class="mt-[130px]">
      <div class="container mx-auto text-xs uppercase mb-3">{sectionTitle}</div>
      <div class="">
        {projects.map(({ label, comingSoon, slug, image }) => (
          <>
            {comingSoon
              ? (
                <div class="border-b border-subdued text-subsubdued">
                  <div
                    href={`/${slug}`}
                    class="group flex gap-4 items-center relative items-center py-7 container mx-auto"
                  >
                    <div class="text-[32px] leading-[38px]">{label}</div>
                    <div class="text-[10px] py-2 px-4 bg-[rgba(0,0,0,.05)] rounded-full uppercase font-subsubdued font-medium">
                      Coming soon
                    </div>
                  </div>
                </div>
              )
              : (
                <div class="relative border-b border-subdued hover:text-white hover:bg-black transition ease-in duration-200">
                  <a
                    href={`/${slug}`}
                    class="group flex items-center py-7 container mx-auto"
                  >
                    <div class="w-8 h-8 bg-white rounded-full absolute ml-[-70px]">
                    </div>
                    <div class="text-[32px] leading-[38px]">{label}</div>
                    <div class="absolute right-16 top-[-190px] hidden group-hover:block transition ease-in duration-200">
                      <Picture>
                        <Source
                          media="(min-width: 768px)"
                          src={image}
                          width={476}
                          height={476}
                        />
                        <img
                          sizes="(max-width: 640px) 100vw, 30vw"
                          src={image}
                          alt={label}
                          decoding="async"
                          loading="lazy"
                        />
                      </Picture>
                    </div>
                  </a>
                </div>
              )}
          </>
        ))}
      </div>
    </div>
  );
}
