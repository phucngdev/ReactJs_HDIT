import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import UserServices from "../services/UserServices.jsx";
import ReactPaginate from "react-paginate";
import Example from "../components/Modal.jsx";

const TableUsers = (props) => {
  const [listUser, setlistUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // click modal add new

  useEffect(() => {
    // call apis
    getUser(1);
  }, []);

  const getUser = async (page) => {
    let res = await UserServices(page);
    if (res && res.data) {
      setTotalUsers(res.data.total);
      setlistUser(res.data.data);
      setTotalPages(res.data.total_pages);
    }
  };

  const handlePageClick = (event) => {
    // console.log(typeof +event);
    // +event - để dấu cộng phía trc sẽ chuyển even từ object thành number
    getUser(+event.selected + 1);
  };
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center my-[10px]">
          <h3 className="">List Users</h3>
          <Example></Example>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item, index) => {
                return (
                  <tr key={`users-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<Example previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextLinkClassName="page-link"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </Container>
    </div>
  );
};

export default TableUsers;
