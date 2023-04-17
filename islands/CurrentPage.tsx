export interface Props {
  pages: string[];
}

export default function CurrentPage({
    pages,
}: Props) {
    let next = pages[0]
    pages?.forEach((page, i) => {
        if (page === window?.location?.pathname && i < pages.length - 1) next = pages[i + 1]
    })
  return (
    <div class="border-y border-[#D9D9D9] mt-10 py-[94px] md:(mt-[100px] py-[112px]) lg:(mt-[90px])">
        <div class="w-full overflow-hidden text-[40px] md:text-[64px]">
            <div class="w-[3000px] ml-[-96%] md:ml-[-50%]">go to next project — go to next project — go to next project — go to next project</div>
        </div>
        <div class="mt-8 flex justify-center">
            {
                <a
                    href={next}
                    class="inline-block bg-black text-white px-[25px] py-[13px] font-medium border-[3px] border-black hover:(text-black bg-transparent) duration-200"
                >
                    Next Project
                </a>
            }
        </div>
    </div>
  );
}