// fetch('https://dummyjson.com/carts')
// .then(value => value.json())
// .then(({carts}) => {
//     console.log(carts);
//     let cartsCollector = document.createElement('div');
//     cartsCollector.classList.add('cartsCollector');
//     document.body.appendChild(cartsCollector);
//    for (let cartValue of carts) {
//        let cart =  document.createElement('div')
//        cart.classList.add('cartDiv');
//        cartsCollector.append(cart);
//        let id = document.createElement('h5')
//        cart.appendChild(id);
//        id.innerText = `Замовлення №${cartValue.id}. Занальна  к-ть товарів ${cartValue.totalProducts}`;
//        let price = document.createElement('p');
//        cart.appendChild(price);
//        price.innerText = `Вартість замовлення:${cartValue.total}. Знижка:${cartValue.discountedTotal}`
//        let userInfo = document.createElement('p');
//        userInfo.innerText = `Замовлення створив користувач:${cartValue.userId}`
//        cart.appendChild(userInfo);
//        for (let productValue of cartValue.products) {
//         let productInfo = document.createElement('div')
//            cart.appendChild(productInfo);
//             let productTitle = document.createElement('p');
//             productTitle.innerText = productValue.title;
//             productInfo.append(productTitle);
//            let productImg = document.createElement('img')
//            productImg.src =productValue.thumbnail
//            productInfo.append(productImg);
//            let productPrice = document.createElement('p');
//            productPrice.innerText = `${productValue.price} $`;
//            productInfo.append(productPrice);
//        }
//    }
// })
//



fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(({recipes}) => {
        console.log(recipes);
        let recipesCollector = document.createElement('div');
        recipesCollector.classList.add('recipesDiv');
        document.body.appendChild(recipesCollector);
        for (let recipeValue of recipes) {
            let recipe = document.createElement('div');
            recipe.classList.add('recipe');
            recipesCollector.appendChild(recipe);
            let nameOfRecipet  = document.createElement('h5');
            nameOfRecipet.innerText = recipeValue.name;
            recipe.appendChild(nameOfRecipet);
            let dishImg = document.createElement('img');
            dishImg.src =   recipeValue.image;
            recipe.appendChild(dishImg);
            let dishCitchen = document.createElement('p');
            dishCitchen.innerText = `Кухня:${recipeValue.cuisine}. Складність приготування: ${recipeValue.difficulty}`;
            recipe.appendChild(dishCitchen);
            let ingredients = document.createElement('ul');
            ingredients.innerText = `Список інгредієнтів:`
            recipe.appendChild(ingredients);
            for (let ingredientValue of recipeValue.ingredients) {
                let x = document.createElement('li');
                x.innerText = ingredientValue;
                ingredients.appendChild(x);
            }


            let instructiosList = document.createElement('ol');
            instructiosList.innerText = `Покроковий рецепт:`
            recipe.appendChild(instructiosList);
            for ( let instruction of recipeValue.instructions){
                let x = document.createElement('li');
                x.innerText = instruction;
                instructiosList.appendChild(x);
            }
            let mealType = document.createElement('p');
            mealType.innerText = recipeValue.mealType;
            recipe.appendChild(mealType);
            let tags = document.createElement('div');
            tags.classList.add('recipeTags');
            recipe.appendChild(tags);
            for (let tag of recipeValue.tags){
                let x = document.createElement('p');
                x.innerText = `#${tag}`
               tags.appendChild(x);
            }
        }})
