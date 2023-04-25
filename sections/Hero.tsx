import Animate from "deco-sites/davi-shama/islands/Animate.tsx";

export interface Props {
  hi: string;
  animatedIntro?: {
    line1: string;
    line2: string;
    line3: string;
  }
  animatedIntroMobile?: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  }
  description: string;
}

export default function Hero({
  hi,
  animatedIntro,
  animatedIntroMobile,
  description,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1"

  return (
    <>
      <Animate id={["heroHi", "heroLine1", "heroLine2", "heroLine3", "hiBar", "heroDesc"]} remove={["opacity-0", "translate-y-5", "skew-y-1"]} />
      <Animate id={["heroHiM", "heroLine1M", "heroLine2M", "heroLine3M", "heroLine4M"]} remove={["opacity-0", "translate-y-5", "skew-y-1"]} />
      <div id="hero" class="container mx-auto mt-[96px] flex gap-[124px] pl-5 pr-12 lg:(container px-0)">
        <div class="flex gap-5 items-stretch w-[640px] text-3xl leading-[1.25] md:leading-[1.25] md:text-5xl tracking-[-0.7%]">
          <div id="hiBar" class={`${classes} hidden md:block flex-none w-[6px] bg-black rounded-full delay-[800ms]`}></div>
          <div class="flex-auto">
            <h1 id="heroHi" class={`${classes} font-medium delay-100`}>{hi}</h1>
            <h2 class="hidden md:block">
              <div id="heroLine1" class={`${classes} delay-200`}>{animatedIntro?.line1}</div>
              <div id="heroLine2" class={`${classes} delay-300`}>{animatedIntro?.line2}</div>
              <div id="heroLine3" class={`${classes} delay-[400ms]`}>{animatedIntro?.line3}</div>
            </h2>
            <div class="md:hidden">
              <div id="heroLine1M" class={`${classes} delay-200`}>{animatedIntroMobile?.line1}</div>
              <div id="heroLine2M" class={`${classes} delay-300`}>{animatedIntroMobile?.line2}</div>
              <div id="heroLine3M" class={`${classes} delay-[400ms]`}>{animatedIntroMobile?.line3}</div>
              <div id="heroLine4M" class={`${classes} delay-[500ms]`}>{animatedIntroMobile?.line4}</div>
            </div>
          </div>
        </div>
        <div id="heroDesc" class={`${classes} hidden w-[352px] leading-[1.7] text-subdued lg:block delay-[800ms]`}>
          {description}
        </div>
      </div>
    </>
  );
}
