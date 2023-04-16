import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  hi: string;
  intro: string;
  description: string;
}

export default function Hero({
  hi,
  intro,
  description,
}: Props) {
  return (
    <div class="container mx-auto mt-[96px] flex gap-[124px] pl-5 pr-12 lg:(container px-0)">
      <div class="flex gap-5 items-stretch w-[640px] text-3xl leading-[1.25] md:leading-[1.25] md:text-5xl tracking-[-0.7%]">
        <div class="hidden md:block flex-none w-[6px] bg-black rounded-full"></div>
        <div class="flex-auto">
          <div>
            <span class="font-medium">{hi}</span>
          </div>
          <div>{intro}</div>
        </div>
      </div>
      <div class="hidden w-[352px] leading-[1.7] text-subdued lg:block">
        {description}
      </div>
    </div>
  );
}
