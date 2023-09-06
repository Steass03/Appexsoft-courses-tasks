import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customer.customers)

    const addCash = cash => {
        dispatch({ type: 'ADD_CASH', payload: cash })
    }
    const getCash = cash => {
        dispatch({ type: 'GET_CASH', payload: cash })
    }

    const addCustomer = name => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = customer => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div className="">{cash}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
            <button onClick={() => addCustomer(prompt())}>Add customer</button>
            <button onClick={() => addCustomer(prompt())}>Add customers from database</button>
            <div className="">
                {customers.length > 0 ? (
                    <div>
                        {customers.map(customer => (
                            <div onClick={removeCustomer(customer)}>{customer.name}</div>
                        ))}
                    </div>
                ) : (
                    <div>Масив пустий</div>
                )}
            </div>
        </div>
    )
}

export default App
