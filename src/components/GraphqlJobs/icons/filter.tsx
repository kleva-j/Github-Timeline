export const FilterIcon = ({ size = 16, strokeWidth = 1.5, stroke = '#e49570', ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.5 6.75h21" />
    <path d="M5.25 12h13.5" />
    <path d="M9.75 17.25h4.5" />
  </svg>
);

export default FilterIcon;
