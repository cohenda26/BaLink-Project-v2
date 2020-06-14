import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";

export default function CountryDropDown() {
  const {register, errors} = useForm();
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountry() {
      const response = await fetch("http://localhost:3000/api/country/list");
      const body = await response.json();
      console.log('country result call API ', body);
      if (body.status == "Ok"){    
        setCountries(body.data.map(({ code, name }) => ({ label: name, value: code })));
      }

    }
    getCountry();
  }, []);
  
  return (
    <div>
      <select placeholder="Country" 
              name="country2" 
              ref={register({required:true})} >
        {countries.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {errors.country2 && <p> country require</p>}
    </div>
  );
}

