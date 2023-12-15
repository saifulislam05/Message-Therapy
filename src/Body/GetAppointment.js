import React from 'react'
import Button from './Button';

function GetAppointment() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mb-6 text-center text-white bg-pink-700 gap-y-8 h-96">
        <h2 className="text-xl font-medium md:text-2xl">
          Think Health. Think Massage.
        </h2>
        <p className="w-11/12 max-w-lg mx-auto text-md">
          We are open 9am to 6pm; Monday through Sunday. If you would like to
          schedule an appointment with us, please call us at 987-654-3210 today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button title="Learn more about us" />
          <Button title="Contact us today" />
        </div>
      </div>
      
    </>
  );
}

export default GetAppointment