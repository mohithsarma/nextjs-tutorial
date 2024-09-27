import React from "react";

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
