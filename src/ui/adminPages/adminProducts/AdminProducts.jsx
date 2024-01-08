import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
} from "reactstrap";
import AddProductModel from "../../components/modals/AddProductModel";
import ProductTable from "./ProductTable.jsx/ProductTable";
import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
export default function AdminProducts() {
  let [modal, setModal] = useState(false);
  let [pageNumber, setPageNumber] = useState(1);
  let [updateFlag, setUpdateFlag] = useState(false);
  const tableDivRef = useRef(null);
  const navigate = useNavigate();
  let toggle = () => setModal(!modal);

  function addProduct() {
    toggle();
    navigate("/adminProducts");
    setUpdateFlag(false);
  }

  return (
    <>
      <div className="d-flex gap-4 justify-content-end me-5 ms-5 mt-3">
        <FormGroup>
          <Input
            style={{ width: "300px" }}
            placeholder="Search your Products"
            type="text"
            onChange={(e) =>
              setLogData({ ...logData, email: e?.target?.value })
            }
          />
        </FormGroup>
        <Button
          onClick={() => addProduct()}
          className="mb-3 bg-white text-black border-3 border-black"
          color="secondary"
        >
          Add Products
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Products</ModalHeader>
          <ModalBody>
            <AddProductModel
              updateFlag={updateFlag}
              setUpdateFlag={setUpdateFlag}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
              toggle={toggle}
            />
          </ModalBody>
        </Modal>
      </div>
      <ProductTable
        setUpdateFlag={setUpdateFlag}
        toggle={toggle}
        tableDivRef={tableDivRef}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

      <Pagination
        tableDivRef={tableDivRef}
        limit="10"
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}
