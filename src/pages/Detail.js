import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const BasicHook = () => {
    const params = useParams();

    const [meals, setMeals] = useState(null);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+params.mealID);
        console.log(data);
        const result = await data.json();
        setMeals(result.meals);
    }

    console.log(meals);

    useEffect(() => {
        fetchData();
    }, [])

    
    return (
        <div>
            <h3>Halo</h3>
                {/* {
                    meals && meals.length > 0 ? (
                        
                            meals.map(meal => (
                                <h2>{meal.strMeal}</h2>
                            ))
                        
                            
                    ) : (
                        <p>loading</p>
                    )
                } */}
        </div>
    )
}

export default BasicHook