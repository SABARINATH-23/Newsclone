import { useEffect, useState } from "react";
import axios from "axios";


const Business = ()=>{

    let[state,setState] = useState([]);
    useEffect(()=>{
        data();
    },[])

    let data = async ()=>{
        try{
            let obj = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e5143dbe6aa04574aa8f068cfbba41ac");
            let finalData = obj.data.articles;
            setState((state)=>([
                ...state,...finalData
            ]));
            
        }catch(e)
        {
            console.log(e)
        }
    }
    return(
        <>
            {
                state.map((ele,index)=>{
                    return(

                        ele.urlToImage != null &&(
                        <div key={index}>
                            <p>{ele.title}</p>
                            <p>{ele.author}</p>
                            <img src={ele.urlToImage} alt="ele.image_url"/>
                        </div>
                        )
                    )
                })
            }
        </>
    )
}
export default Business;