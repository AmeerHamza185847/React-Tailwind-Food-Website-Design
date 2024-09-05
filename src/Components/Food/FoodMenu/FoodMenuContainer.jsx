import React from 'react';
import { FoodItem } from './FoodItem';

import foodImg1 from '../../../assets/Images/item1.jpg';
import foodImg3 from '../../../assets/Images/item3.jpg';



export const FoodMenuContainer = () => {

    const burgerNames = ['Smoky Burger', 'Supreme Burger', 'Pizza']
    const price = ['2.3$', '3.5$', '6$', '1$', '5.3$', '2$']
    return (
        <div className='bg-[#c4c9ff]'>
            <h3 className='font-semibold text-xl text-center py-[10px]'>Food Menu</h3>

            <div className='grid grid-cols-1 p-[20px] gap-10 md:grid-cols-2 md:gap-10 md:p-[30px] lg:grid-cols-2 lg:gap-8 lg:p-[40px]'>
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[0]} price={price[0]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[1]} price={price[1]} />
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[2]} price={price[2]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[0]} price={price[3]} />
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[1]} price={price[4]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[2]} price={price[5]} />
            </div>

            <p className='font-semibold text-xl text-center p-[20px]'>See all foods</p>
        </div>
    )
}
