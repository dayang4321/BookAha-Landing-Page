import React from 'react';

import { Pagination } from 'react-bootstrap'

const UserPagination = (props) => {

    const { currPage, lastPage, changePage, nextPage, prevPage } = props;
    const pageArr = [];
    let i;


    for (i = currPage - 2; i <= lastPage; i++){
        //console.log(currPage, lastPage);
        
        if (i <= 0 || pageArr.length>4) {
          continue
        }
        else if (currPage > 3 && lastPage - currPage === 1) {
          if (i - 1 <= 0) {
            continue
          }  
          pageArr.push(i - 1) 
          if (i === lastPage) {
            pageArr.push(i)
          }
        }
        else if (currPage > 3 && lastPage - currPage === 0) {
         
          if (i - 2 <= 0) {
            continue
          }
          pageArr.push(i - 2)
          if (i === lastPage) {
            pageArr.push(i-1,i)
          }
        }
        else {
          pageArr.push(i)
        }
        // console.log(currPage,lastPage)
        // console.log(pageArr)
    }
  

    const items = pageArr.map((page) => {
        return <Pagination.Item key={page}
            onClick={()=>changePage(page)}
            active={page === currPage} >
        {page}
      </Pagination.Item>
    }) ;

    return (
        <div>

            <Pagination className="justify-content-center">         
                <Pagination.Prev  onClick={()=>prevPage()} />
                {items}
                <Pagination.Next  onClick={()=>nextPage()} />
            </Pagination>
  </div>
    );
}

export default UserPagination;