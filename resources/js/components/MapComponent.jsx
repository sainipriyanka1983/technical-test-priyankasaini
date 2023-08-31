import React from "react";

import {Map} from './map';

export default function Modal(props){
  //pk.eyJ1Ijoic2Fpbmlwcml5YW5rYTE5ODMiLCJhIjoiY2xseWNwa2Y0MHZ6MjNscDY1OXo2cmxoeSJ9.J6iV1c8xuGznet55P162Ew
  return (
    <>
      <button  key= {props.keyid}
        className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => props.setShowModal(true,props.keyid)}
      >
        Show
      </button>
      {props.showModal  &&  props.showModalid== props.keyid? (
        < >
          <div key= {props.keyid}
            className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-3/5  h-screen flex justify-center items-center ">
              {/*content*/}
              <div className="border-0  justify-center rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-4/5  ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Turbine Location
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto  justify-center h-4/5  "> 
                  
              <Map key= {props.keyid} lat={props.lat} long={props.long} />
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                   Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black-200"></div>
        </>
      ) : ""}
    </>
  );
}