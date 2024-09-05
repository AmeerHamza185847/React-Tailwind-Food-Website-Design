import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const FoodItem = ({ foodImg, burgerNames, price }) => {
    return (

        <div className='
        grid grid-cols-4 md:p-[17px] p-[20px] lg:p-[20px] gap-5 bg-[white] shadow-lg rounded-lg'>

            <div className=''>
                <img className='w-full aspect-square h-[80px] rounded-md' src={foodImg} alt="food-item-img-desc" />
            </div>

            <div className='col-span-3'>
                <p className='font-semibold text-lg'>{burgerNames}</p>
                <p>{price}</p>
                <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className='bg-red-500 py-1 px-3 rounded-md
                text-white'>ORDER NOW</button>
            </div>

        </div>
    )
}


