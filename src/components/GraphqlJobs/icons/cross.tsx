export const Cross = ({ size = 16, fill = '#e49570', ...props }) => (
  <svg width={size} height={size} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Cross;
