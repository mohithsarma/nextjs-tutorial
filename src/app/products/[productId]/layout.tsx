import React from "react";
import { Metadata } from "next";

type props = {
  params: {
    productId: string;
  };
};
// need to create a dynamic metadata using generate metadata
// and return a metadata object

export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
  const title = await new Promise(resolve=>{
    setTimeout(() => {
      resolve(`iphone ${params.productId}`)
    }, 10);
  })
  
  return {
    title: `product ${title}`,
  };
};

export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h4>Features Products</h4>
    </>
  );
}
