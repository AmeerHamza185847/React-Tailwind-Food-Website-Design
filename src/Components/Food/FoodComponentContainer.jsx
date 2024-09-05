import React from 'react';
import { FoodComponent } from './FoodComponent';

import foodItem1 from '../../assets/Images/item1.jpg';
import foodItem3 from '../../assets/Images/item3.jpg';
import foodItem4 from '../../assets/Images/item4.jpg';

export const FoodComponentContainer = () => {
  const foodNames  = ['Burger','Channa Chart','Supreme Burger','Burger']
  return (
    <div className='bg-[#c4c9ff]'>
      <div className='grid
      lg:grid-cols-3 lg:gap-5 lg:p-[35px]
      md:grid-cols-3 md:gap-4 md:p-[30px]
      sm:grid-cols-2 sm:gap-3 sm:p-[50px]
      xs:grid-cols-1 xs:gap-5 xs:p-[65px]
      '>
      <FoodComponent foodItem={foodItem1} foodNames={foodNames[0]} />
      <FoodComponent foodItem={foodItem4} foodNames={foodNames[1]}/>
      <FoodComponent foodItem={foodItem3} foodNames={foodNames[2]}/>
      </div>
    </div>
  )
}
