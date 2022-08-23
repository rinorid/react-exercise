import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();

    const [meals, setMeals] = useState(null);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+params.mealID);
        const result = await data.json();
        setMeals(result.meals);
    }

    const PushTags = [];

    function splitTags(tags) {
        if (tags) {
            var Tags = tags.split(",");

            for (const tag of Tags) {
                PushTags.push(
                    <div className="control" key={tag}>
                        <div className="tags has-addons">
                        <a className="tag is-primary is-medium">{tag}</a>
                        </div>
                    </div>
                );
            }   
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    
    return (
        <div>
                {
                    meals && meals.length > 0 ? (
                            meals.map(meal => (
                                <div style={{margin:'30px'}} key={meal.idMeal}>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="card">
                                                <div className="card-image">
                                                    <br/>
                                                    <p className="title">
                                                        {meal.strMeal}
                                                    </p>
                                                    <figure className="image is-4by3">
                                                    <img src={meal.strMealThumb} alt="Placeholder image" />
                                                    </figure>
                                                </div>
                                                <footer className="card-footer">
                                                    <p className="card-footer-item">
                                                    <span>
                                                        View on <a href={meal.strYoutube} target="_blank">Youtube</a>
                                                    </span>
                                                    </p>
                                                    <p className="card-footer-item">
                                                    <span>
                                                        View Article <a href={meal.strSource} target="_blank">Source</a>
                                                    </span>
                                                    </p>
                                                </footer>
                                            </div>
                                        </div>
                                        <div className='column'>
                                            <article className="message is-dark is-medium" style={{textAlign: 'justify'}}>
                                                <div className="message-header">
                                                    <p>Instruction</p>
                                                </div>
                                                <div className="message-body">
                                                    {meal.strInstructions}
                                                </div>
                                            </article>
                                            { meal.strTags ? (
                                                <article className="message is-dark" style={{textAlign: 'left'}}>
                                                    <div className="message-body">
                                                        {
                                                            splitTags(meal.strTags)
                                                        }
                                                        <div className="field is-grouped is-grouped-multiline">
                                                            {PushTags}
                                                        </div>
                                                    </div>
                                                </article>
                                                ) : ( <p></p> )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))   
                            
                    ) : (
                        <p>loading</p>
                    )
                }
        </div>
    )
}

export default Detail