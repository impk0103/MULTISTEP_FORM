// LearningPath.js
import React from 'react';
import Card from "./Card";
import CardPop from "./CardPop";
import paths from "./paths";

function LearningPath(){
    return(
       <div className="flex flex-col items-center justify-center gap-6 w-screen h-screen ">
           <h1 className="text-4xl font-bold  mb-2 max-lg:text-2xl">Learning paths based on your answers</h1>
           <p className='text-gray-600 font-sm mb-6 '>Choose one to get started. You can switch anytime.</p>
           <div className="flex gap-4 items-center justify-center max-lg:flex-col ">
               {
                paths.map((path) => { 
                if(path.popular)    
                return <CardPop key={path.id} {...path}></CardPop>
                else
                return <Card key={path.id} {...path}></Card>
               }) 
               }
           </div>
       </div>
    );
}

export default LearningPath;
