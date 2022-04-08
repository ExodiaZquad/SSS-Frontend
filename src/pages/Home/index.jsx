import React from 'react';
import Navbar from '../../components/Navbar';
import "./home.css";
import { Link } from 'react-router-dom';

const img_check = <div className='img_check'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg></div>

const HeadingHome = () => (
  <div className='home_container'>
   <div className="home_type">
      <div className="home_text">
          <div className="home_title">
              <h3><strong>Welcom to</strong></h3>
              <h2><strong>Schedule Student Supports</strong></h2>
            </div>
          <div className="home_body">
              <p>Once I was seven years old, my mama told me
                Go make yourself some friends or you'll be lonely
                Once I was seven years old
              </p>
          </div>
          <Link to="/generator">
                <div className="home_btn-start">
                      <strong>Get Start</strong>
                </div>
          </Link>
      </div>
      <div className="home_img">
          <img src="https://media.discordapp.net/attachments/910957790992941129/959715576836681778/undraw_software_engineer_re_fyew_1.png" alt="" />
      </div>
   </div>
   <div className='home_background'></div>
  </div>
)

const ShowType = () => (
  <div>
    <div className='showtype_head'>
      <h2><strong>Who wants to use this website?</strong></h2>
    </div>
    <div className="showtype_container">
        <div className="showtype_all">
            <div className="showtype_box">
                <div className='showtype_setbox showtype_box-color1'>
                  <img src="https://media.discordapp.net/attachments/910957790992941129/959519873950707782/graduation-cap-solid_1.png" alt="" />
                </div>
                <div className='showtype_text'>
                  <h2>KMITL Student</h2>
            </div>
            </div>
            <div className="showtype_box">
                <div className='showtype_setbox showtype_box-color2'>
                  <img src="https://media.discordapp.net/attachments/910957790992941129/959713355810082856/school-solid_1.png" alt="" />
                </div>
                <div className='showtype_text'>
                  <h2>College Professor</h2>
                </div>
            </div>
            <div className="showtype_box">
                <div className='showtype_setbox showtype_box-color3 showtype_img3'>
                  <img src="https://media.discordapp.net/attachments/910957790992941129/959713653328859136/user-solid_1.png" alt="" />
                </div>
                <div className='showtype_text'>
                  <h2>Interested Person</h2>
                </div>
            </div>
        </div>
    </div>
  </div>
)

const BoxSevice1 = ({head,row1,row2,row3,row4,row5}) => (
  <div className='boxservice_container'>
    <div className="boxservice_img">
        <img src="https://media.discordapp.net/attachments/910957790992941129/959494332648411156/undraw_online_calendar_re_wk3t.png?width=967&height=676" alt="" />
    </div>
    <div className="boxservice_type">
        <div className="boxservice_head">
            <h2><strong>{head}</strong></h2>
        </div>
        <div className="boxservice_body">
            <div className='boxservice_r1 boxservice_row boxservice_padding'>
              {img_check}<h2>{row1}</h2>
            </div >
            <div className='boxservice_r2 boxservice_row boxservice_padding'>
              {img_check}<h2>{row2}</h2>
            </div>
            <div className='boxservice_r3 boxservice_row boxservice_padding'>
                {img_check}<h2>{row3}</h2>
            </div>
            <div className='boxservice_r4 boxservice_row boxservice_padding'>
                {img_check}<h2>{row4}</h2>
            </div>
            <div className='boxservice_r5 boxservice_row boxservice_padding'>
                {img_check}<h2>{row5}</h2>
            </div>
        </div>
    </div>
  </div>
)

const BoxSevice2 = ({head,row1,row2,row3,row4,row5}) => (
  <div className='boxservice_left'>
    <div className="boxservice_type-left">
        <div className="boxservice_head">
            <h2><strong>{head}</strong></h2>
        </div>
        <div className="boxservice_body-left">
            <div className='boxservice_r1 boxservice_row boxservice_padding'>
              {img_check}<h2>{row1}</h2>
            </div >
            <div className='boxservice_r2 boxservice_row boxservice_padding'>
              {img_check}<h2>{row2}</h2>
            </div>
            <div className='boxservice_r3 boxservice_row boxservice_padding'>
                {img_check}<h2>{row3}</h2>
            </div>
            <div className='boxservice_r4 boxservice_row boxservice_padding'>
                {img_check}<h2>{row4}</h2>
            </div>
            <div className='boxservice_r5 boxservice_row boxservice_padding'>
                {img_check}<h2>{row5}</h2>
            </div>
        </div>
    </div>
    <div className="boxservice_img boxservice_img-left">
            <img src="https://cdn.discordapp.com/attachments/910957790992941129/959753228386467870/undraw_filter_re_sa16.png" alt="" />
    </div>
  </div>
)
const BoxSevice3 = ({head,row1,row2,row3,row4,row5}) => (
  <div className='boxservice_container'>
    <div className="boxservice_img2">
        <img src="https://media.discordapp.net/attachments/910957790992941129/959753228168331304/undraw_feedback_re_urmj.png?width=807&height=676" alt="" />
    </div>
    <div className="boxservice_type2">
        <div className="boxservice_head">
            <h2><strong>{head}</strong></h2>
        </div>
        <div className="boxservice_body2">
            <div className='boxservice_r1 boxservice_row boxservice_padding'>
              {img_check}<h2>{row1}</h2>
            </div >
            <div className='boxservice_r2 boxservice_row boxservice_padding'>
              {img_check}<h2>{row2}</h2>
            </div>
            <div className='boxservice_r3 boxservice_row boxservice_padding'>
                {img_check}<h2>{row3}</h2>
            </div>
            <div className='boxservice_r4 boxservice_row boxservice_padding'>
                {img_check}<h2>{row4}</h2>
            </div>
            <div className='boxservice_r5 boxservice_row boxservice_padding'>
                {img_check}<h2>{row5}</h2>
            </div>
        </div>
    </div>
  </div>
)

const Home = () => {
  return (
    <div className='home_main'>
      <Navbar />
      <HeadingHome/>
      <ShowType/>
      <BoxSevice1
      head = "Schedule Generator"
      row1 = "ใส่รหัสวิชา"
      row2 = "dropdown เลือก sec"
      row3 = "generator ตารางเรียน"
      row4 = "แสดงตารางเรียน"
      row5 = "favourite ตารางเรียนที่ชอบ"
      />
      <BoxSevice2
       head = "Filter Subject"
       row1 = "ใส่รหัสวิชา"
       row2 = "dropdown เลือก favourite schedule"
       row3 = "dropdown เลือก sec"
       row4 = "filter ตารางเรียน"
       row5 = "แสดงตารางวิชาที่คัดกรองแล้ว"
      />
      <BoxSevice3
       head = "Blog Review"
       row1 = "เลือกหมวดวิชา"
       row2 = "เลือกวิชาที่จะรีวิว"
       row3 = "พิมพ์ text เนื้อหาที่จะรีวิว"
       row4 = "ให้เรทติ้งวิชา"
       row5 = "like กับ dislike โพส"
      />
    </div>
  );
};

export default Home;
