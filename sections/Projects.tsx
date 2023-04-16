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
    <div class="mt-20 md:mt-[124px]">
      <div class="mt-1 hidden lg:block text-xs uppercase pb-3 border-b border-subdued">
        <div class="container mx-auto">{sectionTitle}</div>
      </div>
      <div class="flex flex-col gap-16 lg:gap-0">
        {projects.map(({ label, company, year, comingSoon, href, image }) => (
          <>
            {comingSoon
              ? (
                <div class="hidden lg:block border-b border-subdued text-subsubdued">
                  <div
                    href={href}
                    class="group relative items-center py-7 container mx-auto"
                  >
                    <div class="flex text-[32px]">
                      <div class="flex-none w-[745px] flex gap-4 items-center">
                        <div class="">{label}</div>
                        <div class="text-[10px] py-[6px] px-[10px] leading-[1.18] bg-[rgba(0,0,0,.05)] rounded-full uppercase font-subsubdued font-medium">
                          Coming soon
                        </div>
                      </div>
                      <div class="flex-none w-[250px] text-subsubdued text-[rgba(0,0,0,.1)]">
                        {company}
                      </div>
                      <div class="flex-auto text-subsubdued text-[rgba(0,0,0,.1)]">
                        {year}
                      </div>
                    </div>
                  </div>
                </div>
              )
              : (
                <div class="lg:(relative border-b border-subdued hover:text-white hover:bg-black transition ease-in duration-200)">
                  <a
                    href={href}
                    class="flex flex-col gap-8 md:(container flex-row) lg:(group items-center py-7 mx-auto)"
                  >
                    <div class="lg:(fixed z-[2] right-16 bottom-16 hidden group-hover:block transition ease-in duration-200)">
                      <div class="hidden lg:block w-[378px] h-[64px] left-[49px] bottom-5 filter blur-2xl opacity-30 absolute bg-black"></div>
                      <div class="relative">
                        <Picture>
                          <Source
                            media="(min-width: 768px)"
                            src={image}
                            width={476}
                            height={476}
                          />
                          <img
                            src={image}
                            alt={label}
                            decoding="async"
                            loading="lazy"
                            srcset={`${image} 2x`}
                          />
                        </Picture>
                      </div>
                    </div>
                    <div class="flex flex-col px-5 md:px-0 gap-1 text-2xl lg:(flex-row flex-row-reverse text-3xl)">
                      <div class="flex items-center gap-2 leading-[1.18]">
                        <div class="flex-none lg:w-[244px] text-subsubdued">
                          {company}
                        </div>
                        <div class="flex-auto text-subsubdued">{year}</div>
                      </div>
                      <div class="flex-none leading-[1.4] lg:(w-[745px] leading-[1.18])">{label}</div>
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
