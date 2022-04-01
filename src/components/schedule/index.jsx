import React,{useState} from 'react';
import './index.css';
import fake from './testData.json';

const Schedule = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


    const dateReviver = function (value) {
        return new Date(value)
    }


    return(
        <div className='sch_box-shadow'>
            <div className='sch_box'>
                <div className="sch_headbox"></div>
                <div className="sch_body">
                    <div></div>
                    <div className="sch_hourbox">
                        {(() =>{
                            let posts=[];
                            for(let i=0;i<13;i++)
                            {posts.push(<div key={i} className="sch_eachhour">{i+8}</div>)}
                            return posts
                        })()}
                    </div>
                </div>

                {days.map((day,index) => (
                    <div key={index} className="sch_body">
                        <div className="sch_daybox">{day}</div>
                        <div className="sch_barbox">
                            

                        </div>
                    </div>
                ))}
                <div className="sch_tailbox"></div>
            </div>
        </div>
    )
}

export default Schedule;