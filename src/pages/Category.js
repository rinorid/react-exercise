import React, { useState, useEffect } from 'react'
import Card from '../reusable/Card';

const BasicHook = () => {
    const [meals, setMeals] = useState(null);

    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div>
            {
                meals && meals.length > 0 ? (
                    <div style={{margin:'30px'}}>
                        <div className="columns">
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        meals.map(meal => (
                            <Card key={meal.idMeal} imageSource={meal.strMealThumb} title={meal.strMeal} detailURL={"/category/detail/" + meal.idMeal}/>
                        ))
                    }
                            </div>
                        </div>
                    </div>
                        
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}

export default BasicHook