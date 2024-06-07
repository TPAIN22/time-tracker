import Icon from '../assets/images/icon-study.svg'
import Dot from '../assets/images/icon-ellipsis.svg'
import Data from '../data.json'

function Study({time}) {
    const times = Data.find(item => item.title === 'Study');
    const current = times.timeframes[time].current;
    const previous = times.timeframes[time].previous;
    const timeLabels = {
        daily: "Day",
        weekly: "Week",
        monthly: "Month"
    };
        return (
            
            <div className='bg-[var(--Light-red-study)] relative rounded-2xl '>
                <div className=' flex flex-col relative w-64 h-40 overflow-hidden max-sm:w-80'>
                    <img src={Icon} className='w-20 h-20 absolute -top-4  right-4' />
                </div>
                <div className='bg-[var(--Dark-blue)] p-8 absolute w-full top-12 rounded-2xl gap-4 flex flex-col text-white'>
                <div className='flex justify-between items-center'>
                    <h2>{times.title}</h2> <img src={Dot}  className='cursor-pointer'/>
                </div>
                     <div  className='flex items-center justify-between md:grid'>
                     <h1 className='text-5xl mb-3'>{current}hrs</h1>
                     <p className='text-sm text-[var(--Pale-Blue)]'>Last {timeLabels[time]} - {previous}hrs</p>
                        </div>
                 </div>
            </div>
        )
}

export default Study