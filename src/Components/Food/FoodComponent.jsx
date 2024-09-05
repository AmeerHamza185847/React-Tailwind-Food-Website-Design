import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const FoodComponent = ({foodItem,foodNames}) => {
  return (
    <div>
        <p className='text-green-800 text-center font-semibold text-xl mb-2'>{foodNames}</p>
      <div>
        <img 
        className='w-full aspect-square h-[300px] rounded-md lg:rounded-lg'
        src={foodItem}
        alt="food-item" />
      </div>
    </div>
  )
}




// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
    
// }
