import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Bucket.css'
import { addNewItemAction, minusCountAction, plusCountAction } from '../store/BucketReducer'

export default function Bucket() {

    const bucket = useSelector(store => store.bucket)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('bucket', JSON.stringify(bucket))
    }, [bucket])


    return (
        <div className='Items'>
            {bucket.map(el =>
                <div key={el.id} className='Item'>
                    <h1>{el.title}</h1>
                    <div className='Functional'>
                        <button onClick={() => dispatch(plusCountAction(el.id))}>+</button>
                        <h3>{el.count}</h3>
                        <button onClick={() => dispatch(minusCountAction(el.id))}>-</button>
                    </div>

                </div>
            )}
            <button onClick={() => dispatch(addNewItemAction(prompt('Enter name of a new product')))}>Add new bucket item</button>
        </div>
    )
}
