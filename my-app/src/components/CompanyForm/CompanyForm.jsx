import React , {useState} from 'react';
import Modal from 'react-modal';

import {apiAddress} from '../../utils/config'
import CompanyDetails from '../CompanyDetails/CompanyDetails'

import './companyForm.css';

const CompanyForm = () => {
    const [companyName,setCompanyName] =useState('') 
    const [companyData,setCompanyData] = useState([])
    const [isOpen,setIsOpen] = useState(false)
    const handleChangeCompanyName =(event)=>{
        setCompanyName(event.target.value)
    }
    const fetchCompanyData = ()=>{
        const options = {
            method:"GET",
            headers: {
                Authorization:'Bearer sk_81912104bdfcc0ff20a06fa5b228c432'
            }
        }
        fetch(`${apiAddress}?domain=${companyName}`,options)
        .then((response)=>{
            switch (response.status){
                case 200:
                    return response.json()  
                case 404:
                  throw new Error ('no domain found')
                case 401:
                    throw new Error ('auth error')
              }
        })
        .then((data)=>{
            console.log(data)
            if (data){
                const newData = [...companyData]
                newData.push(data)
                return setCompanyData(newData)
            }
                
            else
                throw Error ('no data')
        })
        .then(()=>{
            setIsOpen(true)
        })
        
    }
    return (
        <div className='mainApp'>
            <div className='companyForm'>
                <input onChange={handleChangeCompanyName}></input>
                <button onClick={()=>fetchCompanyData()}>check company domain</button>
            </div>
            <Modal isOpen={isOpen}>
                <CompanyDetails companiesData={companyData} />
                <button onClick={()=>setIsOpen(false)}>close</button>
            </Modal>

            
        </div>
    );
}

export default CompanyForm;
