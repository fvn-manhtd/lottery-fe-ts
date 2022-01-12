import systemCss from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { cloneElement, useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { SpaceProps, space, compose, variant } from "styled-system";

interface MenuProps extends SpaceProps {
  direction?: "left" | "right" | "top_right";
  handler: any;
  children: any;
  className?: string;
  style?: CSSProperties;
}

const StyledMenu = styled.div<SpaceProps & { direction: string }>(
  systemCss({
    position: "relative",
    ".menu-item-holder": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      minWidth: "200px",
      position: "absolute",
      borderRadius: "6px",
      top: "calc(100% + 0.5rem)",
      backgroundColor: themeGet("body.paper", "#ffffff"),
      boxShadow: themeGet("shadows.3", "0 6px 12px rgba(0, 0, 0, 0.16)"),
      zIndex: 100,
    },
  }),
  variant({
    prop: "direction",
    variants: {
      left: {
        ".menu-item-holder": {
          left: 0,
          right: "auto",
        },
      },
      right: {
        ".menu-item-holder": {
          left: "auto",
          right: 0,
        },
      },

      top_right: {
        ".menu-item-holder": {
          left: ["0", "0", "100%"], // responsive array 0, 425, 768, 1024
          top: ["100%", "100%", "0"], // responsive array 0, 425, 768, 1024
          minWidth: "160px",
          padding: "0",
        },
      },
    },
  }),

  compose(space)
);

export const Menu: React.FC<MenuProps> = ({
  handler,
  children,
  direction,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const popoverRef = useRef(show);
  popoverRef.current = show;

  const handleDocumentClick = () => {
    if (popoverRef.current) setShow(false);
  };

  const togglePopover = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <StyledMenu direction={direction} {...props}>
      {cloneElement(handler, { onClick: togglePopover })}
      {show && <div className="menu-item-holder">{children}</div>}
    </StyledMenu>
  );
};

Menu.defaultProps = {
  direction: "left",
};
