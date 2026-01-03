import React from 'react';

const MainPage = () => {
  return (
    <div>
      {/*Headre div*/}
      <div className={'p-3'}>
        <h1>This is Header</h1>
        {/*div for left middle and right side*/}
        <div className={'flex mt-5 justify-between'}>
          {/*Left Side */}
          <div className={''}>
            <h1 className={'text-white hover:bg-[#6a6b6e]'}>George Ratiani</h1>
          </div>
          {/*Middle Side*/}
          <div>
            <h1>this is post side</h1>
          </div>
          {/*  this is right side*/}
          <div>
            <h1>This si Right Side</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;