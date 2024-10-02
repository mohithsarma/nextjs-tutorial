## about 

app folder has the following concepts implimented
- / root route with "tobedon is tobedon" 
- profile and about with page.tsx as basic route.
    - added to return a metadata title "about".
- blog with first and second pages as fixed routes 
- dashboard with a extra file and extra function in page.tsx which can't be accessed via route
- docs with [[...slug]] slug for dynamic routes which returns different
  react components depending on the params.
- products with products / [[productId]] / reviews / [[reviewId]] structure 
    - both productId and reviewId as dynamic routes and review id with 
    - condition so that only 1000 reviews are allowed after that notFound() is called
    - custom not-found.tsx page for review page  after 1000 
    - created to return dynamic function using generateMetadata for using dynamic data.
    - Promise \< Metadata \> function is used to return after a set timeout. 
- custom not-found.tsx for root app  
- for better viewing we use (auth) as a route group. 
    - this folder doesn't affect the route path of register, login, forgot-password
    - makes the dx better 
- the root layout has been changed to include a header and footer 
    - the header and footer just have header and footer text and a simple padding to pop the color
- Added custom layout.tsx for [productId] folder 
    - as this is only run at the productId next routes it will not affect other routes. 
### available Routes 
*    [http://localhost:3000/](http://localhost:3000/)
*    [http://localhost:3000/about](http://localhost:3000/about)
*    [http://localhost:3000/blog](http://localhost:3000/blog)
*    [http://localhost:3000/blog/first](http://localhost:3000/blog/first)
*    [http://localhost:3000/blog/second](http://localhost:3000/blog/second)
*    [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
*    [http://localhost:3000/docs](http://localhost:3000/docs)
*    [http://localhost:3000/docs/[dynamicroute]](http://localhost:3000/docs/[dynamicroute])
*    [http://localhost:3000/profile](http://localhost:3000/profile)
*    [http://localhost:3000/products](http://localhost:3000/products)
*    [http://localhost:3000/products/[dynamicproductid]](http://localhost:3000/products/[dynamicproductid])
*    [http://localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid]](http://localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid])
*    [http://localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid1001]](http://localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid1001])
*    [http://localhost:3000/register](http://localhost:3000/register)
*    [http://localhost:3000/login](http://localhost:3000/login)
*    [http://localhost:3000/forgot-password](http://localhost:3000/forgot-password)


### local server 
start server on localhost 
```bash
npm run dev
```
