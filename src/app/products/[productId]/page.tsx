export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h3>
        Details about the productId = {params.productId} using dynamic function.
      </h3>
    </>
  );
}
