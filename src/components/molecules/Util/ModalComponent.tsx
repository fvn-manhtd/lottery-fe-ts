import React, { useState } from "react";
import Modal from "react-modal";
import { Box } from "components/atoms";

export type ModalProps = {
  buttonElement: JSX.Element;
  content: JSX.Element;
};

export const StyledModal = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 50%)",
    zIndex: 999,
  },
  content: {
    border: "unset",
    background: "white",
    borderRadius: "unset",
    width: "80%",
    maxWidth: "400px",
    height: "auto",
    top: "50%",
    left: "50%",
    padding: "unset",
    transform: "translate(-50%, -50%)",
    "-webkit-transform": "translate(-50%, -50%)",
    "-ms-transform": "translate(-50%, -50%)",
  },
};

export const ModalComponent: React.FC<ModalProps> = ({
  buttonElement,
  content,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Box cursor="pointer" onClick={() => setIsModalOpen(true)}>
        {buttonElement}
      </Box>
      <Modal
        isOpen={isModalOpen}
        style={StyledModal}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        {content}
      </Modal>
    </div>
  );
};
