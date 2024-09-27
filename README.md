### about 

app folder has the following concepts implimented
- / root route with "tobedon is tobedon" 
- profile and about with page.tsx as basic route.
- blog with first and second pages as fixed routes 
- dashboard with a extra file and extra function in page.tsx which can't be accessed via route
- docs with [[...slug]] slug for dynamic routes which returns different
  react components depending on the params.
- products with products / [[productId]] / reviews / [[reviewId]] structure 
    - both productId and reviewId as dynamic routes and review id with 
    - condition so that only 1000 reviews are allowed after that notFound() is called
    - custom not-found.tsx page for review page  after 1000 
- custom not-found.tsx for root app  
- for better viewing we use (auth) as a route group. 
    - this folder doesn't affect the route path of register, login, forgot-password
    - makes the dx better 
- the root layout has been changed to include a header and footer 
    - the header and footer just have header and footer text and a simple padding to pop the color

### available Routes 
*    [localhost:3000/](localhost:3000/)
*    [localhost:3000/about](localhost:3000/about)
*    [localhost:3000/blog](localhost:3000/blog)
*    [localhost:3000/blog/first](localhost:3000/blog/first)
*    [localhost:3000/blog/second](localhost:3000/blog/second)
*    [localhost:3000/dashboard](localhost:3000/dashboard)
*    [localhost:3000/docs](localhost:3000/docs)
*    [localhost:3000/docs/[dynamicroute]](localhost:3000/docs/[dynamicroute])
*    [localhost:3000/profile](localhost:3000/profile)
*    [localhost:3000/products](localhost:3000/products)
*    [localhost:3000/products/[dynamicproductid]](localhost:3000/products/[dynamicproductid])
*    [localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid]](localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid])
*    [localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid]](localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid])
*    [localhost:3000/register](localhost:3000/register)
*    [localhost:3000/login](localhost:3000/login)
*    [localhost:3000/forgot-password](localhost:3000/forgot-password)

* [localhost:3000/](localhost:3000/) - Homepage
* [localhost:3000/about](localhost:3000/about) - About Page
* [localhost:3000/blog](localhost:3000/blog) - Blog Main Page
* [localhost:3000/blog/first](localhost:3000/blog/first) - First Blog Post
* [localhost:3000/blog/second](localhost:3000/blog/second) - Second Blog Post
* [localhost:3000/dashboard](localhost:3000/dashboard) - Dashboard
* [localhost:3000/docs](localhost:3000/docs) - Docs Main Page
* [localhost:3000/docs/[dynamicroute]](localhost:3000/docs/[dynamicroute]) - Dynamic Docs Route (replace [dynamicroute] with actual value)
* [localhost:3000/profile](localhost:3000/profile) - Profile Page
* [localhost:3000/products](localhost:3000/products) - Products Main Page
* [localhost:3000/products/[dynamicproductid]](localhost:3000/products/[dynamicproductid]) - Dynamic Product Page (replace [dynamicproductid] with actual value)
* [localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid]](localhost:3000/products/[dynamicproductid]/reviews/[dynamicreviewid]) - Dynamic Product Review Page (replace [dynamicproductid] and [dynamicreviewid] with actual values)
* [localhost:3000/register](localhost:3000/register) - Register Page
* [localhost:3000/login](localhost:3000/login) - Login Page
* [localhost:3000/forgot-password](localhost:3000/forgot-password) - Forgot Password Page

### local server 
start server on localhost 
```bash
npm run dev
```