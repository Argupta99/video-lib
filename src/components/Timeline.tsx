//actual timeline with markers









type Props = {
    duration: number;
}



const Timeline = ({duration}: Props) => {

const markIntervals = 10;
const totalMarkers =
typeof duration === "number" && duration > 0
 ? Math.floor(duration / markIntervals) : 0;
    return (

        <div className="overflow-x-auto mt-4 border-t border-gray-300 py-2">
     
     {/**marker container */}

     <div className="space-x-4 min-w-full px-4 flex">
      
     {[...Array(totalMarkers)].map((_, index) => {
    const time = index * markIntervals;
    return (
      <div key={index} className="text-center">
        <span className="text-xs">{time}s</span>
      </div>

    );
    
})}
     </div>
        </div>

    );
};

export default Timeline;