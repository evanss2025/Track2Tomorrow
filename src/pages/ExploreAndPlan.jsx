import "../App.css";
import { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ExploreAndPlan() {
  const [output, setOutput] = useState(null);
  function scoreTest() {
    let score = 0;

    const output = document.getElementById('output');
    let result = "";

    if (document.getElementById('stem').checked) {
      score = score + 4;
      result = "You would be best as a STEM major!";
    } else if (document.getElementById('art').checked) {
      score = score + 8;
      result = "You would be best as an art major!";
    } else if (document.getElementById('social').checked) {
      score  = score + 12;
      result = "You would be best as an social science major!";
    } else if (document.getElementById('business').checked) {
      score = score + 16;
      result = "You would be best as a business major";
    } else {
      console.log("nah")
    }


    setOutput(result);

    

    // if (1 < score > 10) {
    //   output.innerHTML = "ResultOne";
    // } else if (11 < score > 20) {
    //   output.innerHTML = "ResultTwo";
    // }
  }
  

  //include quiz javascript here
  return (
    <div className="w-full h-full flex items-center flex-col">
      <a className="w-full flex gap-2" href="/">
        <ArrowRightIcon className="h-7" /> <span>Back to home</span>
      </a>
      <h1 className="font-bold text-3xl text-blue-500">Explore and Plan</h1>

      <div id="question1" className="flex flex-col flex-justify-center items-center mt-2">
        <h1 className="font-bold">What societal issues or causes are you most passionate about?</h1>
        <div className="flex flex-justify-center m-3">
          <label className="radio-label m-2">
            <input id="stem" type="radio" name="question1" value="choice1" className="radio-input" /> Technogical advancements 
          </label>
          <label className="radio-label m-2">
            <input id="business" type="radio" name="question1" value="choice2" className="radio-input" /> Crypto currency

          </label>
          <label className="radio-label m-2">
            <input id="art" type="radio" name="question1" value="choice3" className="radio-input" />  Cultural appropriation 
          </label>
          <label className="radio-label m-2">
            <input id="social" type="radio" name="question1" value="choice4" className="radio-input" />  Mental Health Stigma
          </label>
        </div>
      </div>

      <div id="question2" className="flex flex-col flex-justify-center m-4 items-center">
        <h1 className="font-bold">What personal values are important to you in your future career?</h1>
        <div className="flex flex-justify-center">
          <label className="radio-label m-2">
            <input id="stem" type="radio" name="question2" value="choice1" className="radio-input" /> Innovation
          </label>
          <label className="radio-label m-2">
            <input id="business" type="radio" name="question2" value="choice2" className="radio-input" /> Integrity
          </label>
          <label className="radio-label m-2">
            <input id="art" type="radio" name="question2" value="choice3" className="radio-input" /> Authenticity
          </label>
          <label className="radio-label m-2">
            <input id="social" type="radio" name="question2" value="choice4" className="radio-input" /> Empathy 
          </label>
        </div>
      </div>

      <div id="question3" className="flex flex-col flex-justify-center m-4 items-center">
        <h1 className="font-bold">Currently, what academic subject are you most interested in?</h1>
        <div className="flex flex-justify-center">
          <label className="radio-label m-2">
            <input id="social" type="radio" name="question3" value="choice1" className="radio-input" /> English
          </label>
          <label className="radio-label m-2">
            <input id="stem" type="radio" name="question3" value="choice2" className="radio-input" /> Science
          </label>
          <label className="radio-label m-2">
            <input id="art" type="radio" name="question3" value="choice3" className="radio-input" /> Arts
          </label>
          <label className="radio-label m-2">
            <input id="business" type="radio" name="question3" value="choice4" className="radio-input" /> Math
          </label>
        </div>
      </div>

      <div id="question4" className="flex flex-col flex-justify-center m-4 items-center">
        <h1 className="font-bold">What types of books, magazines, or websites do you typically read?</h1>
        <div className="flex flex-justify-center">
          <label className="radio-label m-2">
            <input id="stem" type="radio" name="question4" value="choice1" className="radio-input" /> Sci-fi
          </label>
          <label className="radio-label m-2">
            <input id="art" type="radio" name="question4" value="choice2" className="radio-input" /> Historical and/or biographical
          </label>
          <label className="radio-label m-2">
            <input id="business" type="radio" name="question4" value="choice3" className="radio-input" /> Finance 
          </label>
          <label className="radio-label m-2">
            <input id="social" type="radio" name="question4" value="choice4" className="radio-input" /> Psychology 
          </label>
        </div>
      </div>

      <div id="question5" className="flex flex-col flex-justify-center m-4 items-center">
        <h1 className="font-bold">In what areas do you feel most confident in your abilities?</h1>
        <div className="flex flex-justify-center">
          <label className="radio-label m-2">
            <input id="choice1" type="radio" name="question5" value="choice1" className="radio-input" /> Technical skills
          </label>
          <label className="radio-label m-2">
            <input id="choice2" type="radio" name="question5" value="choice2" className="radio-input" /> Artistic skills
          </label>
          <label className="radio-label m-2">
            <input id="choice3" type="radio" name="question5" value="choice3" className="radio-input" /> Illustrative skills 
          </label>
          <label className="radio-label m-2">
            <input id="choice4" type="radio" name="question5" value="choice4" className="radio-input" /> Communication and public speaking skills 
          </label>
        </div>
      </div>
        
      <button id="outputTest" className="bg-blue-500 px-5 rounded-lg text-white-600/100 m-8 text-lg font-bold hover:bg-blue-700" onClick={scoreTest}>Submit</button>

      <CareerCard output={output} />
    </div>
  );
}

function CareerCard({ output }) {
  if (!output || output === '') return null;
  const isSTEM = output.includes("stem");
  const isBusiness = output.includes("business");
  const isSocialSciences = output.includes("social science");
  const isArt = output.includes("art");

  
  const getDescription = () => {
    switch (true) {
      case isSTEM:
        return ("Majoring in STEM (Science, Technology, Engineering, and Mathematics) in college involves immersing oneself in the dynamic and innovative fields that drive technological advancements and scientific discoveries. STEM majors tackle complex challenges, from developing cutting-edge technologies to solving critical global issues. Pursuing a STEM degree not only equips students with a deep understanding of their chosen discipline but also fosters problem-solving skills, critical thinking, and the ability to contribute significantly to the ever-evolving landscape of science and technology.")
        break;
      case isBusiness:
        return ("Opting for a business major in college entails delving into the intricacies of commerce, management, and entrepreneurship. Students in business programs learn about financial strategies, organizational dynamics, and market trends, preparing them to navigate the dynamic world of commerce. A business major not only equips individuals with the knowledge to thrive in corporate environments but also nurtures skills in strategic decision-making, leadership, and adaptability, essential for success in a diverse range of industries.")
        break;
      case isSocialSciences:
        return ("Majoring in social sciences at the college level encompasses the study of human behavior, societies, and the institutions that shape them. Social science majors delve into disciplines such as psychology, sociology, anthropology, economics, and political science. Through rigorous inquiry and research, students gain a nuanced understanding of societal structures, cultural dynamics, and the factors influencing human interactions. A degree in social sciences not only cultivates analytical and research skills but also promotes empathy and a profound awareness of the complexities inherent in addressing social issues, making it a foundation for careers in fields like counseling, research, policy analysis, and social advocacy.");
        break;
      case isArt:
        return ("Choosing to major in art at the college level involves a deep exploration of creative expression, aesthetics, and cultural perspectives. Art majors engage in various mediums, from traditional fine arts to digital design, honing their skills in visual communication and storytelling. Beyond technical proficiency, studying art fosters a keen sense of observation, imaginative thinking, and a unique lens through which individuals can contribute to cultural conversations and make meaningful impacts in fields ranging from visual arts and design to multimedia and cultural curation.");
    }
  }
  return (
    <div className="bg-blue-300 rounded-lg">
      <div className="bg-blue-500 p-6 text-xl font-semibold rounded-t-lg">{output}</div>
      <div className="p-6">{getDescription()}</div>
    </div>
  )
}
//stem, business, art, social sciences