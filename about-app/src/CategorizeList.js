import React from 'react'

const categorizedProducts = [
    {
        title: 'Cabage',
        isFruit: false,
        id: 1
    },
    {
        title: 'Apple',
        isFruit: true,
        id: 2
    },
    {
        title: 'Mango',
        isFruit: true,
        id: 3
    },
    {
        title: 'Carrot',
        isFruit: false,
        id: 4
    },
    {
        title: 'Beetroot',
        isFruit: false,
        id: 5
    },
    {
        title: 'Pears',
        isFruit: true,
        id: 6
    },
    {
        title: 'Radish',
        isFruit: false,
        id: 7
    },
    {
        title: 'Tomato',
        isFruit: false,
        id: 8
    },
    {
        title: 'Strawberry',
        isFruit: true,
        id: 9
    },
    {
        title: 'Banana',
        isFruit: true,
        id: 10
    }
];

function CategorizeList() {
    const listItems = categorizedProducts.map(products =>
    <li
        key={products.id}
        style ={{
            color: products.isFruit ? 'red' : 'green'
        }}
        >
            {products.title}
        </li>
    )
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}



export default CategorizeList
