
function CardPop({id,title,text,image}){
    return(
       <div className="relative">
         <div className="flex gap-4  w-[400px] border border-gray-200 p-10 rounded-sm">
            <p><span  className="text-gray-900 font-bold ">{title}</span> {text}</p>
            <img src={process.env.PUBLIC_URL + '/' + image} alt="" className="h-32" />
         </div>
         <div className="bg-amber-400 w-28 rounded-2xl text-[10px] py-1 font-medium absolute -top-3 left-36 text-center"><p>MOST POPULAR</p></div>
       </div>

    );
}

export default CardPop;