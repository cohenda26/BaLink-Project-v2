import React, { useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";

export default function RegisterCustomerForm({Step, OnHandleStepperNext, OnHandleStepperPrev}){
    const {register, handleSubmit, errors} = useForm();
    const [countries, setCountries] = useState([]);
    const [activeStep, setActiveStep] = useState(Step);
    const handleStepperNext = OnHandleStepperNext;
    const handleStepperPrev = OnHandleStepperPrev;
 
    useEffect(() => {
        async function getCountry() {
          const response = await fetch("http://localhost:3000/api/country/list");
          const body = await response.json();
          if (body.status == "Ok"){        
            setCountries(body.data.map(({ code, name }) => ({ label: name, value: code })));
          }
        }
        getCountry();
      }, [countries]);

    useEffect(() => {
        setActiveStep(Step);
    }, [Step]);

    const onSubmit = (data, event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customer: data })
        };

        fetch('http://localhost:3000/api/customer/create', requestOptions)
            .then(response => console.log(response) )
            .catch(error => console.log(error));

        alert(`Félicitation : \n 
                name: ${data.firstName} ${data.lastName} \n 
                email: ${data.email}`)
    }

    const onNext = (event) => {
        event.preventDefault();
        handleStepperNext(event);
    }

    const onPrev = (event) => {
        event.preventDefault();
        handleStepperPrev(event);
    }

    return (

            <form onSubmit={handleSubmit(onSubmit)}>
 
                <div id="step1" className={activeStep === 0 ? "active" : "hidden"} >
                    <div>
                        <input type="text" 
                                placeholder="First name" 
                                name="firstName" 
                                ref={register({required : true, maxLength : {value : 25, message :" Too long message"} }) } />
                        {errors.firstName && <p> first name is required </p>}
                    </div>
                    <div>
                        <input type="text" 
                               placeholder="Last name" 
                               name="lastName" 
                               ref={register({required:true, maxLength : {value : 25, message :" Too long message"} }) } />
                        {errors.lastName && <p> last name is required </p>}
                    </div>
                    <button name="next" onClick={onNext} > Next </button>
                </div>
                <div id="step2" className={activeStep === 1 ? "active" : "hidden"} >
                        <div>
                            <select placeholder="Country" 
                                    name="country" 
                                    ref={register({required:true})} >
                                    {countries.map(({ label, value }) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                    ))}
                            </select>
                            {errors.country && <p> country is required </p>}
                        </div>
                    <div>
                        <input type="text" placeholder="City" name="city" ref={register} />
                    </div>
                    <div>
                        <input type="text" placeholder="Street" name="street" ref={register} />
                    </div>
                    <button name="previous" onClick={onPrev} >Previous</button>
                    <button name="next" onClick={onNext} >Next</button>
                </div>
                <div id="step3" className={activeStep === 2 ? "active" : "hidden"} >
                    <div>
                        <input type="text" 
                            placeholder="Email" 
                            name="email" 
                            ref={register({required:true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})*$/ })} 
                        />
                        {errors.email?.type === "required" && <p> email is required </p>}
                        {errors.email?.type === "pattern" && <p> Email format is not valid </p>}
                    </div>
                    <div>
                        <input type="text" 
                            placeholder="Phone number" 
                            name="phoneNumber" 
                            ref={register({required:true, pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ })} />
                        {errors.phoneNumber?.type === "required" && <p> Phone Number is required </p>}
                        {errors.phoneNumber?.type === "pattern" && <p> Phone Number format is not valid </p>}
                    </div>
                    <button name="previous" onClick={onPrev} >Previous</button>
                    <input type="submit" />
                </div>

            </form>

    )
}