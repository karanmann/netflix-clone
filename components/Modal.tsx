import React from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

const Modal = () => {
  
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClick={handleClose}>
      <>Modal</>
    </MuiModal>
  );
};

export default Modal;
