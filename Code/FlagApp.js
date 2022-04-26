import React from 'react';
import {useState, useEffect} from 'react';
import Data from './countries.json';

const FlagApp = () => {
    
    const [countries, setCountries]  = useState([]);
    useEffect(() => {
            setCountries(Data);
    }, []);

    const [selectedCountry, setSelectedCountry] = useState([]);
    const length = countries.length;
    let selectedCode = "Phone Code";
    let selectedFlag = "";

        for(let i = 0; i <= length-1; i++)
        {
            if(countries[i].name == selectedCountry)
            {
                selectedCode = countries[i].code;
                selectedFlag = countries[i].flag;
            }
        }
        

    const [selectedCountry2, setSelectedCountry2] = useState([]);
    const length1 = countries.length;
    function deleteCountry()
    {
        for(let j = 0; j <= length1-1; j++)
        {
            if(countries[j].name == selectedCountry2)
            {   
                countries.splice(j, 1);
                console.log(countries);
            }
        }   
    }

    

        
    const [inputName, setInputName] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [inputFlag, setInputFlag] = useState("");
    function enterCountry()
    {
        let data = {"name": inputName, "code": inputCode};
        setCountries(countries=>[...countries, data]);
    }



    return (
        <React.Fragment>
        <section>
            <div className='container1'>
                    <h2>Country Selector</h2>
            </div>
            
            <div className='container2'>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className='select'>
                    <option>Select Country</option>
                    {countries.map((item) => {
                       return(
                        <option value={item.name}>{item.name}</option>
                       ) 
                    }
                    )
                    }
                </select>
            </div>

            <div className='container3'>
            <img src={selectedFlag} alt="Country flag" />
            </div>

            <div className='container4'>
                {
                    <p className='phoneCode'>{selectedCode}</p>
                }
            </div>

            <div>
                <div className='tag'>Add a Country</div>
                <div className='container5'>
                <input className='box' type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} name="name" placeholder='Enter Country Name' />
                <input className='box' type="text" value={inputCode} onChange={(e)=>{setInputCode(e.target.value)}} name="code" placeholder='Enter Phone Code'/>
                <input className='box' type="text" value={inputFlag} onChange={(e)=>{setInputFlag(e.target.value)}} name="flag" placeholder='Enter Flag Url'/>
                </div>
                <div className='buttonDiv'><button className='button' onClick={enterCountry} type='button'>Submit</button></div>
                <div className='tag1'>Delete a Country</div>
                <div className='container6'><select value={selectedCountry2} onChange={(e) => setSelectedCountry2(e.target.value)} className='tag2'>
                    <option>Select a Country to Delete</option>
                    {countries.map((item) => {
                       return(
                        <option value={item.name}>{item.name}</option>
                       ) 
                    }
                    )
                    }
                </select></div>
                <div className='buttonDiv'><button className='button1' onClick={deleteCountry} type='button'>Delete</button></div>
            </div>
            
        </section>
    </React.Fragment>
  );
};

export default FlagApp;