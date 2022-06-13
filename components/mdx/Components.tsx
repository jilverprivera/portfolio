import Image from "next/image";
import React from "react";

export const MDXComponents = {
  h1: (props: any) => <h1 className="text-4xl" {...props} />,
  h2: (props: any) => <h1 className="text-3xl" {...props} />,
  h3: (props: any) => <h1 className="text-2xl" {...props} />,
  h4: (props: any) => <h1 className="text-xl" {...props} />,
  h5: (props: any) => <h1 className="text-lg" {...props} />,
  h6: (props: any) => <h1 className="text-base" {...props} />,
  p: (props: any) => <p className="text-base leading-7" {...props} />,
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
