import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  /**
   * @format textarea
   */
  description?: string;
  category: string;
  year: string;
  company: string;
  role: string;
}

export default function ProjectHeader({
  title,
  description,
  category,
  year,
  company,
  role,
}: Props) {
  return (
    <div class="container mx-auto flex mt-32 mb-20">
      <div class="flex-none text-xl font-medium pl-[125px] w-[375px] mt-3">
        {category == 'Miscellaneous' ? (
          <svg width="159" height="19" viewBox="0 0 159 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.824219 0.863281V17.9993H3.44022V5.56728L7.97622 17.9993H10.2802L14.9842 5.54328V17.9993H17.6482V0.863281H14.2402L9.22422 14.4953L4.35222 0.863281H0.824219Z" fill="url(#paint0_radial_334_1762)"/>
            <path d="M23.8292 0.863281H20.9972V3.57528H23.8292V0.863281ZM23.7812 5.51928H21.0452V17.9993H23.7812V5.51928Z" fill="url(#paint1_radial_334_1762)"/>
            <path d="M28.7994 14.1833H26.1834C26.2314 14.9993 26.3994 15.6953 26.7354 16.2233C27.0714 16.7513 27.5034 17.1833 28.0314 17.4953C28.5594 17.8313 29.1354 18.0473 29.8074 18.1913C30.4794 18.3353 31.1754 18.3833 31.8954 18.3833C33.6474 18.3833 34.9674 18.0473 35.8314 17.3513C36.6954 16.6553 37.1274 15.7433 37.1274 14.5913C37.1274 14.0633 37.0554 13.5833 36.9354 13.1513C36.7914 12.7193 36.5754 12.3593 36.2394 12.0233C35.9034 11.6873 35.4714 11.4233 34.9194 11.1833C34.3674 10.9673 33.6714 10.7753 32.8554 10.6313L31.2954 10.3673C30.8634 10.2953 30.5034 10.2233 30.2154 10.1273C29.9274 10.0553 29.6874 9.95928 29.5194 9.83928C29.3514 9.74328 29.2314 9.59928 29.1834 9.40728C29.1114 9.23928 29.0874 9.02328 29.0874 8.73528C29.0874 8.56728 29.1114 8.39928 29.1834 8.20728C29.2554 8.03928 29.3994 7.87128 29.5914 7.72728C29.7834 7.58328 30.0714 7.46328 30.4074 7.36728C30.7434 7.27128 31.1754 7.22328 31.7034 7.22328C32.6154 7.22328 33.2634 7.39128 33.6474 7.67928C34.0314 7.99128 34.3434 8.44728 34.5354 9.07128L36.9834 8.73528C36.8634 8.25528 36.6954 7.79928 36.5034 7.36728C36.2874 6.93528 35.9754 6.55128 35.5914 6.21528C35.1834 5.87928 34.6554 5.61528 34.0314 5.42328C33.3834 5.23128 32.5914 5.13528 31.6314 5.13528C30.8634 5.13528 30.1674 5.23128 29.5434 5.39928C28.9194 5.59128 28.3674 5.83128 27.9114 6.16728C27.4554 6.50328 27.0954 6.88728 26.8554 7.36728C26.5914 7.84728 26.4714 8.35128 26.4714 8.92728C26.4714 9.69528 26.5914 10.2953 26.8554 10.7273C27.0954 11.1593 27.4794 11.5193 28.0074 11.8073C28.5114 12.0953 29.1354 12.3113 29.9034 12.4553C30.6474 12.6233 31.5114 12.7913 32.5194 12.9593C33.2874 13.1033 33.7914 13.2953 34.0314 13.5833C34.2714 13.8713 34.4154 14.2313 34.4154 14.6393C34.4154 15.1673 34.1994 15.5753 33.8154 15.8393C33.4074 16.1273 32.7594 16.2473 31.8474 16.2473C31.4394 16.2473 31.0554 16.2233 30.7194 16.1753C30.3594 16.1273 30.0474 16.0073 29.7834 15.8393C29.5194 15.6953 29.3034 15.4793 29.1354 15.2153C28.9434 14.9513 28.8474 14.6153 28.7994 14.1833Z" fill="url(#paint2_radial_334_1762)"/>
            <path d="M50.646 13.6313H47.886C47.766 14.4473 47.502 15.0953 47.07 15.5273C46.638 15.9593 45.99 16.1753 45.174 16.1753C44.598 16.1753 44.094 16.0793 43.71 15.8393C43.302 15.5993 42.99 15.2873 42.75 14.9033C42.51 14.5193 42.318 14.0393 42.222 13.4873C42.102 12.9593 42.054 12.3593 42.054 11.7353C42.054 11.2073 42.102 10.6553 42.198 10.1273C42.294 9.59928 42.486 9.14328 42.726 8.73528C42.966 8.32728 43.278 7.99128 43.686 7.72728C44.07 7.48728 44.574 7.34328 45.198 7.34328C46.038 7.34328 46.638 7.58328 46.998 8.03928C47.358 8.51928 47.598 9.09528 47.742 9.79128L50.454 9.38328C50.358 8.83128 50.19 8.30328 49.974 7.77528C49.734 7.27128 49.422 6.81528 49.038 6.43128C48.63 6.04728 48.126 5.73528 47.526 5.49528C46.902 5.25528 46.158 5.13528 45.294 5.13528C44.334 5.13528 43.47 5.30328 42.726 5.61528C41.958 5.95128 41.334 6.40728 40.806 6.98328C40.278 7.55928 39.894 8.27928 39.63 9.09528C39.342 9.91128 39.222 10.8233 39.222 11.8073C39.222 12.8153 39.342 13.7033 39.582 14.5193C39.822 15.3353 40.182 16.0073 40.686 16.5833C41.166 17.1593 41.79 17.6153 42.534 17.9273C43.278 18.2393 44.166 18.3833 45.174 18.3833C46.854 18.3833 48.126 17.9753 49.038 17.1353C49.95 16.2953 50.478 15.1193 50.646 13.6313Z" fill="url(#paint3_radial_334_1762)"/>
            <path d="M64.2888 14.3033H61.6488C61.5048 14.9273 61.2168 15.4073 60.7848 15.7433C60.3528 16.0793 59.7048 16.2473 58.8408 16.2473C57.7368 16.2473 56.8968 15.9113 56.3688 15.1913C55.8168 14.4953 55.5288 13.5833 55.5048 12.4313H64.4568V11.2313C64.4568 10.3193 64.3368 9.50328 64.1208 8.75928C63.8808 8.01528 63.5448 7.36728 63.0888 6.83928C62.6088 6.31128 62.0328 5.87928 61.3368 5.59128C60.6168 5.30328 59.8008 5.13528 58.8408 5.13528C57.9288 5.13528 57.1128 5.30328 56.3688 5.59128C55.6248 5.87928 54.9768 6.31128 54.4488 6.88728C53.9208 7.46328 53.4888 8.15928 53.2008 8.97528C52.9128 9.81528 52.7688 10.7753 52.7688 11.8313C52.7688 13.9193 53.2728 15.5273 54.3048 16.6793C55.3368 17.8313 56.8488 18.3833 58.8408 18.3833C60.4728 18.3833 61.7448 18.0473 62.6328 17.3273C63.4968 16.6073 64.0488 15.5993 64.2888 14.3033ZM61.7928 10.5353H55.5528C55.6248 9.52728 55.9368 8.73528 56.4648 8.13528C56.9928 7.53528 57.7608 7.22328 58.7688 7.22328C59.8248 7.22328 60.5928 7.53528 61.0728 8.11128C61.5528 8.71128 61.7928 9.52728 61.7928 10.5353Z" fill="url(#paint4_radial_334_1762)"/>
            <path d="M69.8827 0.863281H67.1467V17.9993H69.8827V0.863281Z" fill="url(#paint5_radial_334_1762)"/>
            <path d="M75.789 0.863281H73.053V17.9993H75.789V0.863281Z" fill="url(#paint6_radial_334_1762)"/>
            <path d="M84.6952 12.1673L86.4472 12.0953V12.8153C86.4472 13.8713 86.1592 14.6873 85.5832 15.2873C85.0072 15.9113 84.1192 16.1993 82.9192 16.1993C82.2472 16.1993 81.7192 16.0553 81.3832 15.7433C81.0472 15.4553 80.8792 15.0233 80.8792 14.4713C80.8792 14.1833 80.9032 13.8953 80.9992 13.6313C81.0952 13.3673 81.2632 13.1273 81.5512 12.9353C81.8152 12.7433 82.1992 12.5753 82.7032 12.4313C83.2072 12.3113 83.8792 12.2153 84.6952 12.1673ZM86.4952 16.3673V17.9993H89.1112V10.1993C89.1112 9.47928 89.0152 8.80728 88.8712 8.18328C88.7272 7.55928 88.4632 7.03128 88.0792 6.57528C87.6952 6.14328 87.1672 5.78328 86.5192 5.51928C85.8712 5.27928 85.0552 5.13528 84.0712 5.13528C82.5352 5.13528 81.3112 5.42328 80.4472 5.97528C79.5592 6.55128 79.0072 7.43928 78.7912 8.63928L81.2872 8.90328C81.4072 8.37528 81.6712 7.94328 82.0792 7.65528C82.4872 7.36728 83.1112 7.22328 83.9752 7.22328C84.6952 7.22328 85.2952 7.41528 85.7512 7.77528C86.2072 8.13528 86.4472 8.78328 86.4472 9.71928V10.2473L84.5992 10.3433C83.8312 10.3913 83.0632 10.4633 82.2952 10.5833C81.5272 10.7033 80.8312 10.9193 80.2072 11.2073C79.5832 11.5193 79.1032 11.9513 78.7192 12.4793C78.3352 13.0073 78.1432 13.7033 78.1432 14.5673C78.1432 15.2153 78.2392 15.7673 78.4552 16.2473C78.6712 16.7273 78.9592 17.1113 79.3432 17.3993C79.7272 17.7113 80.1592 17.9513 80.6872 18.0953C81.1912 18.2393 81.7432 18.3113 82.3432 18.3113C83.3032 18.3113 84.1192 18.1433 84.7912 17.7593C85.4632 17.3993 86.0152 16.9433 86.4952 16.3673Z" fill="url(#paint7_radial_334_1762)"/>
            <path d="M94.7471 5.51928H92.1071V17.9993H94.8191V10.5593C94.8191 10.1513 94.8911 9.76728 95.0591 9.38328C95.2271 8.99928 95.4671 8.66328 95.7551 8.37528C96.0431 8.08728 96.3791 7.87128 96.7871 7.70328C97.1951 7.53528 97.6511 7.43928 98.1311 7.43928C98.8511 7.43928 99.3791 7.65528 99.7631 8.06328C100.123 8.47128 100.315 9.16728 100.315 10.1753V17.9993H103.051V9.74328C103.051 6.67128 101.659 5.13528 98.8751 5.13528C98.0591 5.13528 97.3151 5.32728 96.6191 5.66328C95.9231 6.02328 95.2991 6.57528 94.7471 7.34328V5.51928Z" fill="url(#paint8_radial_334_1762)"/>
            <path d="M117.14 14.3033H114.5C114.356 14.9273 114.068 15.4073 113.636 15.7433C113.204 16.0793 112.556 16.2473 111.692 16.2473C110.588 16.2473 109.748 15.9113 109.22 15.1913C108.668 14.4953 108.38 13.5833 108.356 12.4313H117.308V11.2313C117.308 10.3193 117.188 9.50328 116.972 8.75928C116.732 8.01528 116.396 7.36728 115.94 6.83928C115.46 6.31128 114.884 5.87928 114.188 5.59128C113.468 5.30328 112.652 5.13528 111.692 5.13528C110.78 5.13528 109.964 5.30328 109.22 5.59128C108.476 5.87928 107.828 6.31128 107.3 6.88728C106.772 7.46328 106.34 8.15928 106.052 8.97528C105.764 9.81528 105.62 10.7753 105.62 11.8313C105.62 13.9193 106.124 15.5273 107.156 16.6793C108.188 17.8313 109.7 18.3833 111.692 18.3833C113.324 18.3833 114.596 18.0473 115.484 17.3273C116.348 16.6073 116.9 15.5993 117.14 14.3033ZM114.644 10.5353H108.404C108.476 9.52728 108.788 8.73528 109.316 8.13528C109.844 7.53528 110.612 7.22328 111.62 7.22328C112.676 7.22328 113.444 7.53528 113.924 8.11128C114.404 8.71128 114.644 9.52728 114.644 10.5353Z" fill="url(#paint9_radial_334_1762)"/>
            <path d="M125.71 16.1753C124.51 16.1753 123.67 15.7913 123.142 14.9753C122.614 14.1833 122.374 13.1033 122.374 11.7353C122.374 10.3913 122.638 9.33528 123.166 8.54328C123.694 7.75128 124.558 7.34328 125.71 7.34328C126.862 7.34328 127.702 7.75128 128.23 8.51928C128.758 9.31128 129.046 10.3913 129.046 11.7353C129.046 13.1273 128.758 14.2073 128.23 14.9993C127.702 15.7913 126.862 16.1753 125.71 16.1753ZM125.686 18.3833C126.598 18.3833 127.414 18.2393 128.182 17.9513C128.926 17.6633 129.574 17.2553 130.126 16.6793C130.678 16.1033 131.11 15.4073 131.422 14.5913C131.71 13.7753 131.878 12.8153 131.878 11.7113C131.878 10.7513 131.734 9.88728 131.47 9.07128C131.206 8.25528 130.822 7.55928 130.294 6.98328C129.766 6.40728 129.142 5.97528 128.374 5.63928C127.606 5.30328 126.718 5.13528 125.734 5.13528C124.75 5.13528 123.886 5.30328 123.118 5.61528C122.35 5.95128 121.702 6.38328 121.174 6.95928C120.646 7.53528 120.238 8.23128 119.95 9.04728C119.662 9.86328 119.542 10.7753 119.542 11.7593C119.542 13.8713 120.07 15.5033 121.15 16.6553C122.206 17.8073 123.718 18.3833 125.686 18.3833Z" fill="url(#paint10_radial_334_1762)"/>
            <path d="M137.215 5.51928H134.503V13.7993C134.503 15.3593 134.815 16.5113 135.439 17.2553C136.063 18.0233 137.119 18.3833 138.583 18.3833C139.351 18.3833 140.071 18.2153 140.743 17.8553C141.415 17.5193 142.039 16.9433 142.615 16.1753V17.9993H145.279V5.51928H142.543V12.9593C142.543 13.4393 142.447 13.8713 142.255 14.2553C142.063 14.6393 141.799 14.9753 141.511 15.2393C141.199 15.5273 140.839 15.7193 140.455 15.8633C140.071 16.0073 139.687 16.0793 139.303 16.0793C138.583 16.0793 138.055 15.8873 137.719 15.5033C137.383 15.1193 137.215 14.4233 137.215 13.3673V5.51928Z" fill="url(#paint11_radial_334_1762)"/>
            <path d="M150.253 14.1833H147.637C147.685 14.9993 147.853 15.6953 148.189 16.2233C148.525 16.7513 148.957 17.1833 149.485 17.4953C150.013 17.8313 150.589 18.0473 151.261 18.1913C151.933 18.3353 152.629 18.3833 153.349 18.3833C155.101 18.3833 156.421 18.0473 157.285 17.3513C158.149 16.6553 158.581 15.7433 158.581 14.5913C158.581 14.0633 158.509 13.5833 158.389 13.1513C158.245 12.7193 158.029 12.3593 157.693 12.0233C157.357 11.6873 156.925 11.4233 156.373 11.1833C155.821 10.9673 155.125 10.7753 154.309 10.6313L152.749 10.3673C152.317 10.2953 151.957 10.2233 151.669 10.1273C151.381 10.0553 151.141 9.95928 150.973 9.83928C150.805 9.74328 150.685 9.59928 150.637 9.40728C150.565 9.23928 150.541 9.02328 150.541 8.73528C150.541 8.56728 150.565 8.39928 150.637 8.20728C150.709 8.03928 150.853 7.87128 151.045 7.72728C151.237 7.58328 151.525 7.46328 151.861 7.36728C152.197 7.27128 152.629 7.22328 153.157 7.22328C154.069 7.22328 154.717 7.39128 155.101 7.67928C155.485 7.99128 155.797 8.44728 155.989 9.07128L158.437 8.73528C158.317 8.25528 158.149 7.79928 157.957 7.36728C157.741 6.93528 157.429 6.55128 157.045 6.21528C156.637 5.87928 156.109 5.61528 155.485 5.42328C154.837 5.23128 154.045 5.13528 153.085 5.13528C152.317 5.13528 151.621 5.23128 150.997 5.39928C150.373 5.59128 149.821 5.83128 149.365 6.16728C148.909 6.50328 148.549 6.88728 148.309 7.36728C148.045 7.84728 147.925 8.35128 147.925 8.92728C147.925 9.69528 148.045 10.2953 148.309 10.7273C148.549 11.1593 148.933 11.5193 149.461 11.8073C149.965 12.0953 150.589 12.3113 151.357 12.4553C152.101 12.6233 152.965 12.7913 153.973 12.9593C154.741 13.1033 155.245 13.2953 155.485 13.5833C155.725 13.8713 155.869 14.2313 155.869 14.6393C155.869 15.1673 155.653 15.5753 155.269 15.8393C154.861 16.1273 154.213 16.2473 153.301 16.2473C152.893 16.2473 152.509 16.2233 152.173 16.1753C151.813 16.1273 151.501 16.0073 151.237 15.8393C150.973 15.6953 150.757 15.4793 150.589 15.2153C150.397 14.9513 150.301 14.6153 150.253 14.1833Z" fill="url(#paint12_radial_334_1762)"/>
            <defs>
            <radialGradient id="paint0_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint1_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint2_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint3_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint4_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint5_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint6_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint7_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint8_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint9_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint10_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint11_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            <radialGradient id="paint12_radial_334_1762" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.824219 9.62327) scale(157.756 1428.19)">
            <stop stop-color="#FC7074"/>
            <stop offset="0.390625" stop-color="#EA95D6"/>
            <stop offset="0.661458" stop-color="#54C3FF"/>
            <stop offset="0.96875" stop-color="#4CB943"/>
            </radialGradient>
            </defs>
          </svg>          
        ) : <>{category}</>}
        <div class="text-smooth mt-2">
          {year}
        </div>
      </div>
      <div>
        <div class="flex-none font-medium w-[600px] text-5xl leading-[1.3] tracking-[-0.007em]">
          {title}
        </div>
        {
            description && (
              <div class="mt-10 w-724px leading-[1.3] text-subdued text-xl">
                {description}
              </div>
            )
          }
      </div>
    </div>
  );
}
