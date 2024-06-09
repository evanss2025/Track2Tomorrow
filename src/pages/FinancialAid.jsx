import "../App.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FinancialAid() {
  
  
  function calculateAid() {
    const income = document.getElementById('incomeValue').value;
    const family = document.getElementById('familyMembersValue').value;
    const efc = document.getElementById('efcValue').value;
    const expectedCost = document.getElementById('expectedCostValue').value;
    const display = document.getElementById('aid');
    let aidpercentage = 0;
    let baseaid = 0;
    let FN = 0;

    if (income >= 50000) {
      aidpercentage = 0.2;
    } else {
      aidpercentage = 0.5;
    }

    baseaid = (1000 * (family / 2));
    FN = ((expectedCost - efc) * aidpercentage + baseaid);

    display.innerHTML = ('$' + FN);

  }
  return (
    <div className="w-full h-full">
      <a className="w-full flex gap-2" href="/">
        <ArrowRightIcon className="h-7" /> <span>Back to home</span>
      </a>
      <div className="flex gap-3">
        
        <h1 className="font-bold text-3xl text-blue-500">Financial Aid</h1>
        {/* <span className="w-full h-5 bg-blue-500"></span> */}
      </div>
      <div className="w-full grid gap-3 grid-cols-3">
        <Card title="Estimate Financial Aid" description="Estimate federal financial aid from FAFSA" link="https://studentaid.gov/aid-estimator/" />
        <Card title="Scholarship Match Tools" description= "Find scholarships and financial aid" />
      </div>
      <h1 className="font-bold text-3xl text-blue-500 mt-3 mb-5">Calculate Your Aid</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div id="income" className="flex m-3">
            <label for="income">Household Income:</label>
            <input type="number" id="incomeValue" name="income" required className="border-4 border-blue-500 rounded-lg ml-2"></input>
          </div>
  
          <div id="family" className="flex m-3">
            <label for="familyMembers">Number of Family Members:</label>
            <input type="number" id="familyMembersValue" name="familyMembers" required className="border-4 border-blue-500 rounded-lg ml-2"></input>
          </div>
  
          <div id="expectedCost" className="flex m-3">
            <label for="expectedCost">Expected Annual Cost of College:</label>
            <input type="number" id="expectedCostValue" name="expectedCost" required className="border-4 border-blue-500 rounded-lg ml-2"></input>
          </div>
  
          <div id="efc" className="flex m-3">
            <label for="efc">Expected Family Contribution (EFC):</label>
            <input type="number" id="efcValue" name="efc" className="border-4 border-blue-500 rounded-lg ml-2"></input>
          </div>
        </div>

        <button type="button" className="font-bold w-1/3 bg-blue-500 rounded-lg hover:bg-blue-600 ease-in-out duration-300 text-stone-50 p-3" onClick={() => {calculateAid();}} >Calculate</button>

        <div className="bg-blue-500 rounded-lg p-3 text-stone-50 font-bold font-3xl m-5" id="aid">Your Aid Will Show Here</div>
      </div>      
        
    </div>

    
  );
}

function PFACalculator() {
  return (
    <div className="w-full h-full">
      <div className="text-3xl font-bold text-blue-500">Personal Financial Aid Calculator</div>
      
    </div>
  )
}

function Card({ title, description, link }) {
  return (
    <a href={link}>
      <div className="w-full rounded-lg bg-slate-200 relative block">
        <div className="card-header bg-gradient-to-br from-blue-300 to-indigo-400 rounded-t-lg h-18 w-full"></div>
        <div className="p-4">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </a>
  );
}
