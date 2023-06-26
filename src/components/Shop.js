import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div className='text-center mt-5'>
            <h2 className='mb-5'>Deposit / Withdraw Money</h2>
            {/* <button className="btn btn-success mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn btn-success mx-3" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className="btn btn-success mx-3" onClick={()=>{withdrawMoney(100)}}>-</button>
            Update Balance
            <button className="btn btn-success mx-3" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
