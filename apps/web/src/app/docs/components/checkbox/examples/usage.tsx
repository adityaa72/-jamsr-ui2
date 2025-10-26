// export const CheckboxUsage = () => {
//   return <Checkbox label="I am a checkbox" />;
// };

const CheckIcon = () => {
  return (
    <svg
      width={10}
      height={8}
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_978_10250)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.55005 0C7.27405 0 7.02405 0.112 6.84305 0.293L5.84305 1.293L3.55005 3.586L2.25705 2.293C2.07605 2.112 1.82605 2 1.55005 2C0.998049 2 0.550049 2.448 0.550049 3C0.550049 3.276 0.662049 3.526 0.843049 3.707L2.84305 5.707C3.02405 5.888 3.27405 6 3.55005 6C3.82605 6 4.07605 5.888 4.25705 5.707L7.25705 2.707L8.25705 1.707C8.43805 1.526 8.55005 1.276 8.55005 1C8.55005 0.4475 8.10205 0 7.55005 0Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_978_10250"
          x="4.88274e-05"
          y={0}
          width="9.1"
          height="7.55"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.05"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_978_10250"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation="0.25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0941176 0 0 0 0 0.0941176 0 0 0 0 0.105882 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_978_10250"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_978_10250"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CheckboxUsage = () => {
  return (
    <div className="size-5 bg-primary border-primary rounded-md flex items-center justify-center">
      <CheckIcon />
    </div>
  );
};
