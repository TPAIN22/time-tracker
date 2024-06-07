import { useState } from 'react';
import Dave from '../assets/images/image-jeremy.png';

function Daved({ time, setTime }) {
    const [selectedTime, setSelectedTime] = useState(time);

    function handleChange(event) {
        const newValue = event.target.value;
        setTime(newValue);
        setSelectedTime(newValue);
    }

    return (
        <div className="flex flex-col bg-[var(--Dark-blue)] rounded-2xl">
            <div className='bg-[--Blue] rounded-2xl flex flex-col gap-8 p-8 w-64 max-sm:flex-row max-sm:items-center md:pb-20 max-sm:w-full'>
                <img src={Dave} className='w-20 h-20' alt="Jeremy Robson" />
                <div>
                    <p className='text-sm text-[var(--Pale-Blue)]'>Report for</p>
                    <h1 className='text-5xl text-white'>Jeremy Robson</h1>
                </div>
            </div>
            <div className='text-[var(--Pale-Blue)] flex flex-col gap-4 p-8 bg-[var(--Dark-blue)] rounded-b-2xl max-sm:flex-row max-sm:justify-evenly text-lg'>
                <label className={`${selectedTime === 'daily' ? 'text-white font-semibold' : ''} hover:text-white cursor-pointer flex items-center`}>
                    <input type="radio" name="time" value="daily" className='hidden' onChange={handleChange} />
                    <span className='ml-2'>Daily</span>
                </label>
                <label className={`${selectedTime === 'weekly' ? 'text-white font-semibold' : ''} hover:text-white cursor-pointer flex items-center`}>
                    <input type="radio" name="time" value="weekly" className='hidden' onChange={handleChange} />
                    <span className='ml-2'>Weekly</span>
                </label>
                <label className={`${selectedTime === 'monthly' ? 'text-white font-semibold' : ''} hover:text-white cursor-pointer flex items-center`}>
                    <input type="radio" name="time" value="monthly" className='hidden' onChange={handleChange} />
                    <span className='ml-2'>Monthly</span>
                </label>
            </div>
        </div>
    );
}

export default Daved;
