import React from "react";
import {FaReact  } from "react-icons/fa";
import {TbBrandRedux ,TbBrandNodejs} from "react-icons/tb"
import {PiFileHtmlFill} from "react-icons/pi"
import {BiSolidFileCss} from "react-icons/bi"
import {SiNextdotjs ,SiBabel ,SiGithub ,SiNpm,SiTailwindcss ,SiAppwrite , SiJavascript ,SiFirebase,SiJest,SiWebpack,SiVite} from "react-icons/si"
const SignIn = () => {
  return (
    <div>
     
      <div className='absolute top- border-[2px] bg-brand-beige border-black h-[396px] w-[1584px]'>
        <p className="font-semibold text-3xl absolute top-[180px] left-[600px]">
       " संकल्प से सृष्टि 
        " 
        </p>
        <div className="flex flex-col border-[0px] px-2 py-1 border-black w-1/4 mt-[50px] rounded-xl ml-[900px]">
        <div className="flex justify-between my-4">
          <SiNextdotjs size={40}/>
        <FaReact size={40}/>
        <TbBrandRedux size={40}/>
<SiTailwindcss size={40}/>
        </div>
        <div className="flex justify-between my-4">
          <SiJavascript size={40}/>
        <SiFirebase size={40}/>
        <SiAppwrite size={40}/>
<SiWebpack size={40}/>
        </div>
        <div className="flex justify-between my-4">
          <SiVite size={40}/>
        <SiJest size={40}/>
        <PiFileHtmlFill size={40}/>
<BiSolidFileCss size={40}/>
        </div>
        <div className="flex justify-between my-4">
          <SiNpm size={40}/>
        <TbBrandNodejs size={40}/>
        <SiGithub size={40}/>
<SiBabel size={40}/>
        </div>
        
        </div>
         
      </div>
    </div>
  );
};

export default SignIn;
