import React, { useState } from "react";
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
export default function AdminProducts() {
  let [modal, setModal] = useState(false);
  let toggle = () => setModal(!modal);
  return (
    <>
      <div className="d-flex gap-4 justify-content-end me-5 ms-5">
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
          onClick={toggle}
          className="mb-3 bg-white text-black border-3 border-black"
          color="secondary"
        >
          Add Products
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Products</ModalHeader>
          <ModalBody>
            <AddProductModel />
          </ModalBody>
        </Modal>
      </div>
      <ProductTable />
    </>
  );
}
