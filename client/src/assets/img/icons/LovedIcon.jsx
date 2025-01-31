/* eslint-disable react/prop-types */
const LovedIcon = ({ color = "#0F172A", size = 16, style }) => {
  return (
    <div className={`flex items-center ${style}`}>
      <svg
        width={size}
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_370_118)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1753 28.3222C21.8439 28.577 21.4843 28.7883 21.0888 28.8971C19.9755 29.2078 18.7591 28.7448 17.6966 28.4341C10.5733 26.3475 5.80211 23.0801 4.43357 18.2046C3.34113 14.3111 4.39178 10.4113 6.70202 7.98755C8.84213 5.74246 12.015 4.832 15.2699 6.29092C17.3891 3.33269 20.5754 2.46884 23.5065 3.30006C26.6704 4.19654 29.4522 7.02737 30.376 10.9675C30.5571 11.7402 30.6481 12.5269 30.6491 13.3276C31.0312 13.5316 31.3894 13.7802 31.7237 14.0733C33.4504 15.5944 34.3727 18.1782 33.8578 20.8645C33.2011 24.292 30.1492 26.6986 25.7839 28.417C25.0362 28.7122 24.2184 29.0773 23.402 28.9282C22.9483 28.8443 22.5424 28.6019 22.1753 28.3222ZM7.29899 17.333C6.50055 14.4851 7.30346 11.7692 8.82124 10.1767C10.2778 8.64786 12.4373 8.07921 14.8252 9.53347C15.6594 10.0415 16.7354 9.74011 17.213 8.86849C18.583 6.36549 20.7261 5.73314 22.7215 6.29869C24.8019 6.88909 26.8017 8.82188 27.4763 11.704C27.5589 12.0499 27.6136 12.4047 27.6404 12.7682C27.0937 12.8411 26.5604 12.9987 26.0585 13.2359C24.4556 11.6092 22.3335 11.2891 20.462 12.0069C18.3398 12.8195 16.6235 14.9201 16.2236 17.6282C15.8161 20.4015 17.0742 23.1049 19.4158 25.7043C19.1203 25.6266 18.8144 25.5334 18.5054 25.4432C11.5941 23.4188 8.20786 20.5724 7.29899 17.333ZM19.1755 18.099C19.4143 16.4676 20.4277 15.3318 21.4932 14.9217C22.4782 14.5457 23.5721 14.743 24.4034 15.9937C24.5274 16.1801 24.6856 16.339 24.8689 16.4613C25.0522 16.5837 25.2569 16.6669 25.4713 16.7064C25.6857 16.7458 25.9055 16.7406 26.118 16.6911C26.3305 16.6416 26.5314 16.5487 26.7092 16.4179C27.9031 15.5369 28.9955 15.742 29.7955 16.4458C30.664 17.2102 31.2401 18.6396 30.9297 20.257C30.5939 22.0127 28.8881 23.874 24.7288 25.5101C24.4646 25.6142 24.2019 25.726 23.9303 25.8084C23.702 25.6328 23.4916 25.4355 23.2767 25.2444C19.9068 22.2256 18.9144 19.8686 19.1755 18.0974V18.099Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_370_118"
            x="0"
            y="0"
            width="38"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_370_118"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_370_118"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_370_118"
              result="effect2_dropShadow_370_118"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_370_118"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LovedIcon;
