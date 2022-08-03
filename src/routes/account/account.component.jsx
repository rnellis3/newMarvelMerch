import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { getUserStoredCartFromCollection } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/cart.context';
const Account = () => {
  const {currentUser} = useContext(UserContext)
  const {setStoredItemsToCart, storedCartCollection} = useContext(CartContext)
  const [storedList, setStoredList] = useState([])

  //const [storedCartData, setStoredCartData] = useState(null)
  //need to run useEffect to run the getUser from firebase and then display the content?
  console.log('account page user', currentUser)

  useEffect(() => {
    if (!currentUser) return;
    const testFunc = async() => {
      //const results = await setStoredItemsToCart(getUserStoredCartFromCollection(currentUser))
      const results = await getUserStoredCartFromCollection(currentUser)
      console.log('this is the result', results)
      setStoredList(storedList.push(results))
      console.log('this is the storedList', storedList)
      console.log('this is the storedCartData', storedCartCollection)
      return results
    }
   testFunc()
  }, [currentUser, storedCartCollection])

  return (
    <div>
    <div>account.component</div>
    {/* {!storedCartData.arrayValue.values[0].mapValue.fields.description ? <div>Nothing</div> : <div>storedCartData.arrayValue.values[0].mapValue.fields.description</div>}
    <h3>{storedCartData.arrayValue.values[0].mapValue.fields.description}</h3> */}
    </div>
  )
}

export default Account