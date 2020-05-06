import React from 'react';
import _ from "lodash"

const Pagination = (props) => {
    const pages=_.range(1,props.pageCount+1)
    return ( 
            <div className="paging">
                {/* <!-- left arrow --> */}
                <div className="paging__arrow">
                    <i className="fas fa-angle-left"></i>
                </div>
                {/* <!-- page number --> */}
                {pages.map(page=>(
                <div  key={page} onClick={()=>props.onPageChange(page)} className={props.activePage===page ?"active paging__number":"paging__number"}>{page}</div>
                ))}

                {/* <div className="paging__number active">1</div>
                <div className="paging__number">3</div> */}
                {/* <!-- right arrow --> */}
                <div className="paging__arrow">
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
     );
}
 
export default Pagination;