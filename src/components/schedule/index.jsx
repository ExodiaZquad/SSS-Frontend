import React from 'react';
import './index.css'

const Schedule = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
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
                            {posts.push(<div key={i} className="sch_eachhour">{i}</div>)}
                            return posts
                        })()}
                    </div>
                </div>

                {days.map((day,index) => (
                    <div key={index} class="sch_body">
                        <div class="sch_daybox">{day}</div>
                        <div class="sch_barbox"></div>
                    </div>
                ))}
                <div class="sch_tailbox"></div>
            </div>
        </div>
    )
}

export default Schedule;