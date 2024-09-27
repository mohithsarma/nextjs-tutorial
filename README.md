### about 

app folder has the following concepts implimented
- / root route with "tobedon is tobedon" 
- profile and about with page.tsx as basic route.
- blog with first and second pages as fixed routes 
- dashboard with a extra file and extra function in page.tsx which can't be accessed via route
- docs with [[...slug]] slug for dynamic routes which returns different
  react components depending on the params.
- products with products / [[productsId]] / reviews / [[reviewId]] structure 
    - both productId and reviewId as dynamic routes and review id with 
    - condition so that only 1000 reviews are allowed after that notFound() is called
    - custom not-found.tsx page for review page  after 1000 
- custom not-found.tsx for app  
### temp
- start server on localhost 
```bash
npm run dev
```