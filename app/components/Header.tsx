"use client";
import React from "react";
import { SidebarTrigger } from "./shared/ui/sidebar";
import { Button } from "./shared/ui/button";
import { useDashBoard } from "../context/dashBoardContext";
import DialogModule from "./DialogModule";

type HeaderProps = {
  tableName: string;
  ButtonName?: string;
  DescriptionTable: string;
  icon?: React.ReactNode;
  text?: string;
  displayButton: boolean;
  FormComponent?: React.ReactNode;
};

const Header = ({ tableName, ButtonName, DescriptionTable, icon, text, displayButton, FormComponent }: HeaderProps) => {
  "use memo";

  const { setIsEdit, setEditId, setOpen } = useDashBoard();

  const handleAddNew = () => {
    setIsEdit(false);
    setOpen(true);
    setEditId(null);
  };

  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Sidebar menu trigger */}
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />

        {/* Page title and subtitle */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-foreground">{tableName}</h1>
          <p className="text-sm text-muted-foreground">{DescriptionTable}</p>
        </div>

        {/* New Booking/Room button */}
        {text ? (
          <span className="text-foreground">{text}</span>
        ) : (
          displayButton && (
            <Button className="light:bg-blue-600 light:hover:bg-blue-700 focus:border-primary " onClick={handleAddNew}>
              {icon}
              {ButtonName}
            </Button>
          )
        )}
        <DialogModule tableName={tableName} formComponent={FormComponent} />
      </div>
    </header>
  );
};

export default Header;
