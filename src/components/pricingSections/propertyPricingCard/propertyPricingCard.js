
import './propertyPricingCard.css';

function propertyPricingCard() {
    return (

        <li className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className='text-gray-600 pr-2'>ویژگی</p>
        </li>

    );
}

export default propertyPricingCard;
