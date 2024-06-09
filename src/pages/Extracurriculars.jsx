import "../App.css";
import { useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import OpportunityMap from '../components/OpportunityMap';
export default function Extracurriculars() {


  return (
    <div className="w-full h-full">
      <a className="w-full flex gap-2" href="/">
        <ArrowRightIcon className="h-7" /> <span>Back to home</span>
      </a>
      <h1 className="font-bold text-3xl text-blue-500">Find Extracurricular Opportunities Near you!</h1>
      <br></br>
      <div id="map" className="w-full">
      <OpportunityMap />
      </div>

      
    </div>
  
  );
}


// w-full h-#