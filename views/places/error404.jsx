const React = require('react')
const Def = require('../default')

function error404 () {
   return (
       <Def>
           <main>
               <h1>NESTED 404: PAGE NOT FOUND</h1>
               <p>Oops, Sorry, This page does not exist.</p>
           </main>
       </Def>
   )
}

module.exports = error404