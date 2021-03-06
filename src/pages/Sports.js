import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MainStore from '../MainStore';

function Sports() {
    const [firstSportsData,setFirstSportsData]=useState();
    const [secSportsData,setSecSportsData]=useState();
    const [thirdSportsData,setThirdSportsData]=useState();
    const [fourthSportsData,setFourthSportsData]=useState();


 
  const url1=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=sports&country=in&page=0`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=sports&country=in&page=1`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=sports&country=in&page=2`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=sports&country=in&page=3`

  const apiData1=()=>{
    axios.get(url1).then((response)=>{
          
           setFirstSportsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{
          
           setSecSportsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{
          
           setThirdSportsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{
          
           setFourthSportsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

   useEffect(()=>{
    apiData1();
    apiData2();
    apiData3();
    apiData4();
  
   },[])
  
  return (
    <>
       <MainStore data={firstSportsData} s_data={secSportsData} t_data={thirdSportsData} f_data={fourthSportsData}></MainStore>
    </>
  )
}

export default Sports;