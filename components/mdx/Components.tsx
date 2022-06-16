import Image from "next/image";
import React from "react";

export const MDXComponents = {
  img: (props: any) => (
    <div className="my-6">
      <Image
        className="rounded-md"
        width={680}
        height={480}
        objectFit="cover"
        alt="image"
        {...props}
      />
    </div>
  ),
};
