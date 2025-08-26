import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./shared/ui/dialog";
import { useDashBoard } from "../context/dashBoardContext";

type DialogModuleProps = {
  tableName: string;

  formComponent?: any;
};
const DialogModule = ({ tableName, formComponent }: DialogModuleProps) => {
  "use memo"
  const { isEdit, open, setOpen } = useDashBoard();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit" : "Add"} {tableName}
          </DialogTitle>
          <DialogDescription>{isEdit ? `Update the selected ${tableName.toLowerCase()} information` : `Create a new ${tableName.toLowerCase()} entry`}</DialogDescription>
          {formComponent}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModule;
