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
### local server 
start server on localhost 
```bash
npm run dev
```