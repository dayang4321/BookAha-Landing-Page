import React from 'react';
import Axios,{setAuthToken} from '../../../axios-base';

import SideNav from '../SideNav/SideNav';
import UserPagination from './UserPagination/UserPagination';
import UserTable from './UserTable/UserTable';


const AdminMain = (props) => {
    const {token} = props;

    const [currentPage, setCurrentPage] = React.useState(1);

    const [tableData, setTableData] = React.useState([]);

    const [lastPage, setLastPage] = React.useState(1);

    const changePageHandler = (num) => {
        setCurrentPage(num);
    }
    const prevPageHandler = () => {
        if (currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
        else return
    }
    const nextPageHandler = () => {
        if ( lastPage>currentPage){
            setCurrentPage(currentPage + 1)
        }
        else return
    }

    React.useEffect(() => {
        const getTable = (page) => {
            const url = `website-forms/launch?page=${page}`
            setAuthToken(token)
            Axios.get(url)
                .then((res) => {
                    //console.log(req);
                    // console.log(res)
                    // console.log(res.data.data.data)
                    setCurrentPage(res.data.data.current_page);
                    setLastPage(res.data.data.last_page);
                    setTableData(res.data.data.data);
                  
                })
                .catch((error) => {
                    error.response ? alert(error.response.data.message) : alert(error);
            })
        }
        getTable(currentPage);
    }, [currentPage,token]);











    return (
        <div className="container-fluid">
  <div className="row">
   <SideNav/>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
         <h1 className="h2">Dashboard</h1> 
        <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
             <button type="button" className="btn btn-sm btn-outline-secondary">Share</button> 
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div> 
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button> 
        </div>
      </div>

      <h2>ParcHost Signups</h2>
      <div className="table-responsive">
                        <UserTable data={tableData} />
                        <UserPagination currPage={currentPage} lastPage={lastPage}
                            changePage={changePageHandler} prevPage={prevPageHandler} nextPage={nextPageHandler} />
      </div>
    </main>
  </div>
</div>
    );
}

export default AdminMain;