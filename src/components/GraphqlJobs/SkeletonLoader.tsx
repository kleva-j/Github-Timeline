export const SkeletonLoader = ({ count }) => {
  const loader = (index) => (
    <div key={index} className="flex flex-col border shadow rounded-md p-5 max-w-sm w-full mx-auto h-48">
      <div className="flex">
        <div className="bg-gray-200 w-3 animate-pulse h-2 rounded-2xl"></div>
        <div className="bg-gray-200 w-20 animate-pulse h-2 rounded-2xl ml-1"></div>
        <div className="bg-gray-200 w-10 animate-pulse h-2 rounded-2xl ml-1"></div>
        <div className="bg-gray-200 w-16 animate-pulse h-2 rounded-2xl ml-auto"></div>
      </div>
      <div className="bg-gray-200 w-full animate-pulse h-5 rounded-2xl mt-5 mb-1"></div>
      <div className="bg-gray-200 w-10 animate-pulse h-5 rounded-2xl"></div>
      <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl mt-3"></div>
      <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl my-2"></div>
      <div className="bg-gray-200 w-12 animate-pulse h-2 rounded-2xl"></div>
    </div>
  );
  return [...Array(count)].map((_, i) => loader(i));
};
