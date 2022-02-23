const React = require('react')
const Def = require('../default')

function show(data) {
    console.log(data)
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div>
                    <img src={`${ data.place.pic }`}/>
                </div>
                <div>
                    <h2>
                        Description
                    </h2>
                    <h3>
                        { data.place.city }, 
                        { data.place.state },  
                        serving { data.place.cuisines }
                    </h3>
                </div>
                <section>
                    <h2>
                        Rating
                    </h2>
                    <h3>
                        Currently Unrated
                    </h3>
                </section>
                <hr/>
                <div>
                    <h2>
                        Comments
                    </h2>
                    <h3>
                        No comments yet!
                    </h3>
                </div>
            </main>

        </Def>
    )
}

module.exports = show