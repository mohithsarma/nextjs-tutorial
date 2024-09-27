import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  // Check if params.slug is undefined or empty (for /docs route)
  if (!params.slug || params.slug.length === 0) {
    console.log("use  [[...slug]] for catch-all");
    return <h3>Docs home page.</h3>;
  } else if (params.slug.length === 2) {
    console.log(params.slug);
    return (
      <>
        <h3>
          viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h3>
      </>
    );
  } else if (params.slug.length === 1) {
    console.log(params.slug);
    return (
      <>
        <h3>viewing feature {params.slug[0]} </h3>
      </>
    );
  } else {
    console.log(params.slug);
    // Handle other unexpected cases if needed
    return <h3>Unexpected number of URL segments.</h3>;
  }
}
