import React from "react";
import Modal from "react-modal";
import { Box, Icon, FlexBox } from "components/atoms";

export type ModalProps = {
  buttonElement: JSX.Element;
  content: JSX.Element;
};

const StyledModal = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 50%)",
    zIndex: 999,
  },
  content: {
    overflow:"unset",
    zIndex:"1000",
    border: "unset",
    background: "white",
    borderRadius: "unset",
    width: "80%",
    maxWidth: "500px",
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <Box onClick={() => setIsModalOpen(true)}>
        {buttonElement}
      </Box>
      <Modal
        isOpen={isModalOpen}
        style={StyledModal}
      >
        <FlexBox 
          borderRadius="50%" 
          bg="gray.350" 
          width={35} 
          height={35}
          color="white"
          border="2px solid white"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={-15}
          right={-15}
          cursor="pointer"
          onClick={() => {
            setIsModalOpen(false);
          }}
          >
          <Icon variant="medium">
            close
          </Icon>
        </FlexBox>
        {content}
      </Modal>
    </div>
  );
};
