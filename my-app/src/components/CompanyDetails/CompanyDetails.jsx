import React from 'react';

import './companyDetails.css';

const CompanyDetails = (props) => {
    const {companiesData} = props
    console.log(companiesData)
    return (
        <div className='companies'>
        {companiesData.map((companyData)=>{
            const {logo,name,type,description,location} = companyData
            return (
                <div className='companyDetails'>
                    <div className='inforamriomRow'>
                    <h1>{name}</h1>
                    <div className='rowDetails'>
                        <label>{'company logo: '}</label>
                        <img src={logo}></img>
                    </div>
                    <div className='rowDetails'>
                        <label>{'company name: '}</label>
                        <span>{name}</span>
                    </div>
                    <div className='rowDetails'>
                        <label>{'company type: '}</label>
                        <span>{type}</span>
                    </div>
                    <div className='rowDetails'>
                        <label>{'company description: '}</label>
                        <span>{description}</span>
                    </div>
                    <div className='rowDetails'>
                        <label>{'location: '}</label>
                        <span>{location}</span>
                    </div>
                </div>
                </div>

                )
        })}
        </div>
           
    );
}

export default CompanyDetails;
