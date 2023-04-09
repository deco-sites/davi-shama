import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Project {
  /**
   * @description Project title
   */
  label: string;
  company?: string;
  year?: string;
  comingSoon?: boolean;
  /**
   * @description Page link
   */
  href?: string;
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
      <div class="text-xs uppercase pb-3 border-b border-subdued">
        <div class="container mx-auto">{sectionTitle}</div>
      </div>
      <div class="">
        {projects.map(({ label, company, year, comingSoon, href, image }) => (
          <>
            {comingSoon
              ? (
                <div class="border-b border-subdued text-subsubdued">
                  <div
                    href={href}
                    class="group relative items-center py-7 container mx-auto"
                  >
                    <div class="flex text-[32px]">
                        <div class="flex-none w-[745px] flex gap-4 items-center">
                            <div class="">{label}</div>
                            <div class="text-[10px] py-2 px-4 bg-[rgba(0,0,0,.05)] rounded-full uppercase font-subsubdued font-medium">
                                Coming soon
                            </div>
                        </div>
                        <div class="flex-none w-[250px] text-subsubdued text-[rgba(0,0,0,.1)]">{company}</div>
                        <div class="flex-auto text-subsubdued text-[rgba(0,0,0,.1)]">{year}</div>
                    </div>
                  </div>
                </div>
              )
              : (
                <div class="relative border-b border-subdued hover:text-white hover:bg-black transition ease-in duration-200">
                  <a
                    href={href}
                    class="group flex items-center py-7 container mx-auto"
                  >
                    <div class="w-8 h-8 bg-white rounded-full absolute ml-[-70px]">
                    </div>
                    <div class="flex text-[32px] leading-[38px]">
                        <div class="flex-none w-[745px]">{label}</div>
                        <div class="flex-none w-[250px] text-subsubdued">{company}</div>
                        <div class="flex-auto text-subsubdued">{year}</div>
                    </div>
                    <div class="fixed z-[2] right-16 bottom-16 hidden group-hover:block transition ease-in duration-200">
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
