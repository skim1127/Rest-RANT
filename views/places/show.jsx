const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No Comments Yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not Yet Rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        // loop to make the number of stars you need
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                { stars } stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return(
                <div className="border" key={ data.place.name }>
                    <h2 className="rant">{ c.rant ? 'RANT! >:(' : 'RAVE! <3' }</h2>
                    <h4>{ c.content }</h4>
                    <h3>
                        <strong>- { c.author }</strong>
                    </h3>
                    <h4>Rating: { c.stars }</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <h1>{ data.place.name }</h1>
                    <div className="col-sm-6">
                        <img src={ data.place.pic } alt={ data.place.name }/>
                        <h3>
                            Located in { data.place.city }, { data.place.state }
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h2>
                            Description
                        </h2>
                        <h3>
                            { data.place.showEstablished() }
                        </h3>
                        <h2>
                            Rating
                        </h2>
                        { rating }
                        <h4>
                            Serving { data.place.cuisines }
                        </h4>
                    </div>
                    <hr/>
                    <div>
                        <h2>
                            Comments
                        </h2>
                        { comments }
                    </div>
                    <button type="submit" className="btn">
                        <a href={`/places/${ data.place.id }/edit`} className="btn btn-warning">
                            Edit
                        </a>
                    </button>
                    <form method="POST" action={`/places/${ data.place.id }?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <hr/>
                <h2>Want to Rant/Rave?</h2>
                <form method="POST" action={`/places/${ data.place.id }/comment`}>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="content" 
                        name="content" 
                        required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="author" 
                        name="author" 
                        required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <div className="slide-container">
                            <input 
                            className="slider"
                            type="range"
                            min="0"
                            max="5"
                            defaultValue="5"
                            id="stars" 
                            name="stars" 
                            required/>
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant?</label>
                        <input 
                        type="checkbox"
                        name="rant"
                        id="rant"
                        defaultChecked/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"/>
                </form>
            </main>

        </Def>
    )
}

module.exports = show