import React from "react";

interface MainPaddingProps {
  children: React.ReactNode;
  className?: string;
  mainclass?: string;
}

const MainPadding = ({ children, className, mainclass }: MainPaddingProps) => {
  return (
    <div className={`max-w-[1920px] mx-auto w-full ${mainclass}`}>
      <div
        className={`3xl:max-w-[1664px] 3xl:px-0 mx-auto 2xl:px-24 xl:px-10 px-6 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainPadding;
