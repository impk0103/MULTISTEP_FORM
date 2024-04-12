
function Card({id,title,text,image}){
    return(
       <div className="flex gap-4 w-[400px] rounded-sm border border-gray-200 p-10">
        <p><span className="text-gray-900 font-bold ">{title}</span> {text}</p>
        <img src={process.env.PUBLIC_URL + '/' + image} alt="" className="h-32" />
       </div>
    );
}

export default Card;