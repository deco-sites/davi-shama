import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  textLeft?: string;
  textRight?: string;
}

export default function Footer({
  textLeft,
  textRight,
}: Props) {
  return (
    <div class="flex items-center justify-between px-8 mb-8 mt-[120px]">
      <div class="block">{textLeft}</div>
      <div class="block">{textRight}</div>
    </div>
  );
}
