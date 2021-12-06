import React, { cloneElement, Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MobileMenuStyle } from "./MobileMenuStyle";

export interface MobileMenuProps {
  position?: "left" | "right" | "top";
  open?: boolean;
  width?: number;
  scroll?: boolean;
  handle: React.ReactElement;
  toggleMobileMenu?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  position,
  open,
  width,
  scroll,
  handle,
  children,
  toggleMobileMenu,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(open);
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(open);
  }, [open]);

  if (globalThis.document && mobileMenuOpen) {
    let mobilemenu = document.querySelector("#mobile-menu-root");

    if (!mobilemenu) {
      mobilemenu = document.createElement("div");
      mobilemenu.setAttribute("id", "mobile-menu-root");
      document.body.appendChild(mobilemenu);
    }

    return (
      <Fragment>
        {createPortal(
          <MobileMenuStyle
            open={mobileMenuOpen}
            width={width}
            position={position}
            scroll={scroll}
            onClick={toggleMobileMenu || handleToggleMobileMenu}
          >
            <div
              className="mobile-menu-content"
              onClick={handleModalContentClick}
            >
              {children}
            </div>
          </MobileMenuStyle>,
          mobilemenu
        )}

        {handle &&
          cloneElement(handle, {
            className: handle.props?.className + " cursor-pointer",
            onClick: toggleMobileMenu || handleToggleMobileMenu,
          })}
      </Fragment>
    );
  } else
    return (
      handle &&
      cloneElement(handle, {
        className: handle.props?.className + " cursor-pointer",
        onClick: toggleMobileMenu || handleToggleMobileMenu,
      })
    );
};

MobileMenu.defaultProps = {
  width: 280,
  position: "right",
  open: false,
  scroll: false,
};
