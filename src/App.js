
import React ,{useState, useEffect, Component}from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import './App.css';


const alankey = 'b1bd811a53a8ce7dbb2b0d20a6bdca402e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ({props}) =>{
    const[newsarticles,setnewsarticles]=useState([])
    
    
    useEffect(() => {
        alanBtn({
            key:alankey,
            onCommand: ({command,articles,number}) => {
                if(command === 'newHeadlines'){
                    setnewsarticles(articles)
                   
            }else if(command==='open'){
                const parsednumber=number.length>2?wordsToNumbers(number,{fuzzy:true}):number
                const article=articles[parsednumber-1];
                if(parsednumber>20){
                    alanBtn().playText('Please try again')
                }else if(article){

                    window.open(article.url,'_blank')
                    alanBtn().playText('opening');
                }

                
            }
        }})
    },[])
    
    return(
        <div className="first">
            <h1  ><i>Echo <FilterTiltShiftOutlinedIcon/></i>
                
            </h1>
            
            
            <NewsCards articles={newsarticles} />
        </div>
    )
    }
    
export default App;