const React = require('react')
const Def = require('./default')

function error404 () {
   return (
       <Def>
           <main>
               <h1>404: PAGE NOT FOUND</h1>
               <div>
                   <img src="/images/cute-pom.jpg" alt="cute dog"/>
                   <div>
                       Photo by <a href="https://unsplash.com/@cookiethepom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cookie the Pom</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div>
               </div>
               <p>Oops, Sorry, This page does not exist.</p>
           </main>
       </Def>
   )
}

module.exports = error404