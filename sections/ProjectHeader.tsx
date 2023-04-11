import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  category: string;
  year: string;
  company: string;
  role: string;
}

export default function ProjectHeader({
  title,
  category,
  year,
  company,
  role,
}: Props) {
  return (
    <div class="container mx-auto flex mt-32 mb-20">
      <div class="flex-none text-xl pl-[125px] w-[375px] mt-3">
        {category}
        <div class="text-subdued mt-2">
          {year}
        </div>
      </div>
      <div class="flex-none w-[600px] text-5xl leading-[68px]">
        {title}
      </div>
    </div>
  );
}
