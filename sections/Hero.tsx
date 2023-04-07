import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  hi: string;
  intro: string;
  description: string;
}

export default function Hero({
  hi, intro, description
}: Props) {
  return (
    <div class="container mx-auto mt-[96px] flex gap-[124px]">
      <div class="flex gap-5 items-stretch w-[640px] text-5xl leading-[60px]">
        <div class="w-5 bg-black rounded-full"></div>
        <div>
            <div><span class="font-bold">{hi}</span> -</div>
            <div>{intro}</div>
        </div>
      </div>
      <div class="w-[352px] font-sm text-subdued">
        {description}
      </div>
    </div>
  );
}
