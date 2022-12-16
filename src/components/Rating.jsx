// import { AiFillStar} from 'react-icons/ai';
// import { FaStarHalf} from 'react-icons/fa';
import { BsStarHalf,BsStarFill} from 'react-icons/bs';

const Rating = ({rating}) => {
    const int_part = Math.trunc(rating); 
    const float_part = Number((rating-int_part).toFixed(2)); 

    const stars = [];
    for (let i = 0; i < int_part; i++) {
        stars.push(<BsStarFill/>);
    }
    if (float_part>0.1){
        stars.push(<BsStarHalf/>)
    }
    stars.push(<p className='px-2'> ({rating.toFixed(2)}) </p>)
    return(
        <div className='flex text-amber-500 items-center'>{
        stars.map((star,index)=>{
            return <div key={index}>{star}</div>
        })}
        </div>
    )
}
 
export default Rating;