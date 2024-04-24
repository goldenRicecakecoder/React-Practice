import React from 'react'

const products = [
    { title: 'Carrot', 
        id: 1
    },
    { title: 'Bell pepper', 
        id: 2
    },
    { title: 'Cucumber', 
        id: 3
    },
    { title: 'Cabage', 
        id: 4
    },
    { title: 'Tomato', 
        id: 5
    }
];



function DisplayList() {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
        );
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  );
}



export default DisplayList
