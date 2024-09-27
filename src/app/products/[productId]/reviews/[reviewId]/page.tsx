import { notFound } from "next/navigation"

export default function ReviewDetail({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}){

    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return (
        <>
        <h3>review id {params.reviewId} for product id {params.productId} </h3>
        </>
    )
}