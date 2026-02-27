import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useContactSales } from "@/contexts/ContactSalesContext";

interface ContactSalesButtonProps extends ButtonProps {
  href?: string; // optional override
}

const ContactSalesButton: React.FC<React.PropsWithChildren<ContactSalesButtonProps>> = ({
  children,
  href = "tel:+918600669633",
  ...buttonProps
}) => {
  const { increment } = useContactSales();

  const handleClick = () => {
    increment();
  };

  return (
    <a href={href} onClick={handleClick}>
      <Button {...buttonProps}>{children}</Button>
    </a>
  );
};

export default ContactSalesButton;
