import { Item } from '../Item/Item'
import { useState } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [users, setUsers] = useState({})

    const obras = [{
        id: 1,
        nombre: 'la gioconda',
        año: 1503,
        autor: 'leonardo da vinci'
    },
    {
        id: 2,
        nombre: 'la ultima cena',
        año: 1495,
        autor: 'leonardo da vinci'
    }]

    return (
        <div>
            <h2>
                {greeting}

            </h2>
            <button onClick={() => { setUsers(obras.find(us => us.id === 1)) }}>clic</button>

            <div>
                <Item obra={users} />

            </div>
        </div>
    )
}

export default ItemListContainer