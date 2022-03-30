import React from 'react';
import './index.css';
import fake from './testData.json';

const Schedule = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const bars = [[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]];
    const alldate = [];
    const allhours =[];

    const dateReviver = function (value) {
        return new Date(value)
    }
    
    fake.map((fak) => {
        alldate.push(dateReviver(fak.class.start).getDay());
        alldate.push(dateReviver(fak.class.end).getDay());

        allhours.push(dateReviver(fak.class.start).getHours())
        allhours.push(dateReviver(fak.class.end).getHours())
    })
    // console.log(alldate);
    console.log(allhours);

    alldate.map((i, index) =>{
        bars[i-1][allhours[index]-8] = 1 ;
    })

    console.log(bars);

    return(
        <div className='sch_box-shadow'>
            <div className='sch_box'>
                <div class="sch_headbox"></div>
                <div class="sch_body">
                    <div></div>
                    <div class="sch_hourbox">
                        {(() =>{
                            let posts=[];
                            for(let i=0;i<13;i++)
                            {posts.push(<div key={i} className="sch_eachhour">{i+8}</div>)}
                            return posts
                        })()}
                    </div>
                </div>

                {days.map((day,index) => (
                    <div key={index} class="sch_body">
                        <div class="sch_daybox">{day}</div>
                        <div class="sch_barbox">
                            <div className='ez'></div>
                        </div>
                    </div>
                ))}
                <div class="sch_tailbox"></div>
            </div>
        </div>
    )
}

export default Schedule;