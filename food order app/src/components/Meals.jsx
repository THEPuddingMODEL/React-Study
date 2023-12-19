// {
//     "id": "m1",
//     "name": "Mac & Cheese",
//     "price": "8.99",
//     "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
//     "image": "images/mac-and-cheese.jpg"
//   },


import MealItem from "./MealItem.jsx";

import useHttps from "../util/useHttp.js";

export default function Meals(){    


    // initial value for data is not defined, waiting for http request response, however, component would not wait
    const {data:meals, isLoading, error} = useHttps('http://localhost:3000/meals',{},[])
    // give the initial value, so the fetch would not fail instanly

    // we need to manage the state mentioned in htpp request
    return <ul id="meals">
        {meals.map(meal=>{
            return <MealItem key={meal.id} meal={meal}></MealItem>
        })}
    </ul>
}