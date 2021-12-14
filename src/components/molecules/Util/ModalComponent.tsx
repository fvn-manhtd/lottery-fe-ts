import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Icon } from "components/atoms";

export type ModalProps = {
  buttonElement: JSX.Element;
  content: JSX.Element;
  minHeight?: string;
  maxWidth?: string;
};

export const StyledModal = (minHeight, maxWidth) => {
  return {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 50%)",
      zIndex: 999,
    },
    content: {
      border: "unset",
      background: "white",
      borderRadius: "unset",
      width: "90%",
      height: "auto",
      top: "50%",
      left: "50%",
      padding: "unset",
      transform: "translate(-50%, -50%)",
      WebkitTransform: "translate(-50%, -50%)",
      overflow: "unset",
      minHeight: minHeight ? minHeight : "auto",
      maxWidth: maxWidth ? maxWidth : "400px",
    },
  };
};

export const ModalComponent: React.FC<ModalProps> = ({
  buttonElement,
  content,
  minHeight,
  maxWidth,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Box cursor="pointer" onClick={() => setIsModalOpen(true)}>
        {buttonElement}
      </Box>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        style={StyledModal(minHeight, maxWidth)}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        {content}

        <Box
          cursor="pointer"
          color="primary.text"
          border="1px solid"
          borderColor="gray.white"
          bg="gray.600"
          width="40px"
          height="40px"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          display="flex"
          position="absolute"
          top="-20px"
          right="-20px"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <Icon>close</Icon>
        </Box>
      </Modal>
    </div>
  );
};
