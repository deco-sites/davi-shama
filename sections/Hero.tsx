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
    <div class="container mx-auto mt-[96px] flex gap-[124px]">
      <div class="flex gap-5 items-stretch w-[640px] text-5xl leading-[60px]">
        <div class="flex-none w-[6px] bg-black rounded-full"></div>
        <div class="flex-auto">
          <div>
            <span class="font-medium">{hi}</span>
          </div>
          <div>{intro}</div>
        </div>
      </div>
      <div class="w-[352px] leading-[1.7] text-subdued">
        {description}
      </div>
    </div>
  );
}
