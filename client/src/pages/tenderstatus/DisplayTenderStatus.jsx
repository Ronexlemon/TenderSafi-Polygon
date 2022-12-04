import React, { useState, useEffect } from "react";

const DisplayTenderStatus = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [color, setColor] = useState(true);

  return (
    <div className="w-10/12 mx-auto my-10">
      
      <h1 className="font-jakarta text-3xl font-extrabold">Tender Status</h1>
       
        <table className="min-w-max w-full table-auto my-10">
          <thead>
            <tr className="bg-primary-color/60 text-white font-jakarta uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left font-josefin">Bidder</th>
              <th className="py-3 px-6 text-left">Goods or Service</th>
              <th className="py-3 px-6 text-left">Tenderee</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#130026]  text-sm font-light">
            {props.bids.map((tender, index) => (
              <>
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-2 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2"></div>
                      <span className="font-medium font-josefin">
                        {tender.companyNames}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-left ">
                    <div className="flex items-center">
                      <div className="mr-2"></div>
                      <span className="font-bold font-josefin mr-2">Document: </span> 
                      <a className="font-josefin" href={tender.goodDealsWith} target="_blank">
                         Link
                      </a>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-left">
                    <div className="flex items-center">
                      <div className="mr-2"></div>
                      <span className="font-josefin font-normal">
                        {tender.companyOfferTender}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-left">
                    <div className="flex items-center">
                      <div className="mr-2"></div>
                      
                        
                        {tender.choice === 1 ? (
                          <button
                            className="py-2 px-5 bg-green/20 rounded-full font-josefin font-normal"
                            style={{ color: color ? "green" : "orange" }}
                          >
                            Approved
                          </button>
                        ) : (
                          <button
                          className="py-2 px-5 bg-orange/20 rounded-full font-josefin font-normal"
                            style={{ color: color ? "orange" : "green" }}
                          >
                            Pending
                          </button>
                        )}
                      
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};
export default DisplayTenderStatus;
