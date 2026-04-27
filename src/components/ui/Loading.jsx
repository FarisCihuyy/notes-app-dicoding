import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
    </div>
  );
};
export default Loading;
