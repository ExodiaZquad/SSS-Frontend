import React from 'react';
import './index.css';
import fake from './testData.json';

const Schedule = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const dateReviver = function (value) {
        return new Date(value)
    }

    let alldate = [];
    let allhour = [];
    fake.map((fak) => {
        alldate.push(dateReviver(fak.class.start).getDay());
        alldate.push(dateReviver(fak.class.end).getDay());

        allhour.push(dateReviver(fak.class.start).getHours());
        allhour.push(dateReviver(fak.class.end).getHours());
    })
    console.log(alldate,allhour);

    let bars_temp = [[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]];
    for (let i = 0; i < alldate.length; i++) {
        bars_temp[alldate[i]-1][allhour[i]-8]=1;
    }
    console.log(bars_temp)

    let bars=[];
    for (let i = 0; i < bars_temp.length; i++) {
        let toggle = false;
        let between1 = [];
        for (let j = 0; j< bars_temp[i].length; j++){
            if (bars_temp[i][j] === 1){
                toggle = !toggle;
            }
            between1.push(toggle);
        }
        bars.push(between1);
        // console.log(between1);
    }
    console.log(bars);
    


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
                            {bars[index].map((bar) => (
                                bar ? <div className='sch_barbox-act'></div> : <div className='sch_barbox-nact'></div>
                            ))}

                        </div>
                    </div>
                ))}
                <div className="sch_tailbox"></div>
            </div>
        </div>
    )
}

export default Schedule;