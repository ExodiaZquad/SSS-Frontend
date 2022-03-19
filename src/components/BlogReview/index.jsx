import React, { useState } from 'react';

const Inputnut = () => {
  //   const [subjectId, setSubjectId] = useState('');
  //   const [nameSubject, setNameSubject] = useState('');

  //   const [nameUser, setNameUser] = useState('');

  //   const [reviewUser, setReviewUser] = useState('');

  //   const saveSubjectId = event => {
  //     //   console.log(event.target.value);
  //     setSubjectId(event.target.value);
  //     console.log('Subject ID => ', subjectId);
  //   };
  //   const saveNameSubject = event => {
  //     //   console.log(event.target.value);
  //     setNameSubject(event.target.value);
  //     console.log('Subject Name => ', nameSubject);
  //   };
  const [blogreviewUser, setBlogReviewUser] = useState({
    subjectId: '',
    nameSubject: '',
    nameUser: '',
    text_reviewUser: '',
  });
  const saveItem = event => {
    event.preventDefault();
    // setSubjectId(event.target.value);
    console.log(blogreviewUser);
  };
  return (
    <div>
      <form className="flex flex-wrap flex-col items-center justify-center" onSubmit={saveItem}>
        <div className="border-4 border-green-500">
          <label>Subject ID</label>
          <input type="text" onChange={e => setBlogReviewUser({ ...blogreviewUser, subjectId: e.target.value })} />
        </div>
        <div className="border-4 border-red-500">
          <label>Subject</label>
          <input type="text" onChange={e => setBlogReviewUser({ ...blogreviewUser, nameSubject: e.target.value })} />
        </div>
        <div className="border-4 border-black">
          <label>Name</label>
          <input type="text" onChange={e => setBlogReviewUser({ ...blogreviewUser, nameUser: e.target.value })} />
        </div>

        <div className="border-4 border-purple-500">
          <label>Blog Review</label>
          <textarea
            className="resize rounded-md h-full"
            onChange={e => setBlogReviewUser({ ...blogreviewUser, text_reviewUser: e.target.value })}
          ></textarea>
        </div>
        <div className="border-4 border-sky-500">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Inputnut;
