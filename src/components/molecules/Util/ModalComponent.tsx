import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Box, Icon, FlexBox } from "components/atoms";

export type ModalProps = {
  buttonElement: JSX.Element;
  content: JSX.Element;
  minHeight?: string;
  maxWidth?: string;
  onOpen?: boolean;
  hasCloseButton?: boolean;
  shouldCloseOnOverlayClick?: boolean;
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
  onOpen,
  hasCloseButton,
  shouldCloseOnOverlayClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (onOpen) setIsModalOpen(true);
    else setIsModalOpen(false);
  }, [onOpen]);

  return (
    <div>
      <Box onClick={() => setIsModalOpen(true)}>{buttonElement}</Box>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        style={StyledModal(minHeight, maxWidth)}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      >
        {hasCloseButton && (
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
            <Icon variant="medium">close</Icon>
          </FlexBox>
        )}

        {content}
      </Modal>
    </div>
  );
};

ModalComponent.defaultProps = {
  hasCloseButton: true,
  shouldCloseOnOverlayClick: true,
};
