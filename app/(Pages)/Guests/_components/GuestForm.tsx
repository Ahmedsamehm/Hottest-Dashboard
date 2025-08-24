import { Checkbox } from "@/app/components/shared/ui/checkbox";
import { Input } from "@/app/components/shared/ui/input";
import { Label } from "@/app/components/shared/ui/label";

import { FormLabel } from "@/app/Types/types";
import React from "react";
import { Controller } from "react-hook-form";

const formLabel: FormLabel[] = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Email", name: "email", type: "text" },
  { label: "National ID", name: "nationalID", type: "text" },
  { label: "Nationality", name: "nationality", type: "text" },
  { label: "Phone", name: "phone", type: "text" },
];

const GuestForm = ({ control, register }: { control: any; register: any }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[50vh] md:max-h-full overflow-y-auto">
        {formLabel.map((field, index) => {
          return (
            <div key={index} className="space-y-3">
              <Label className="my-2" htmlFor={field.name}>
                {field.label}
              </Label>
              <Input required id={field.name} type={field.type} {...register(field.name)} placeholder={`Enter ${field.label}`} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full flex justify-between p-3 rounded-lg border border-border bg-card">
          <Label htmlFor="vip">VIP</Label>
          <Controller
            name="vip"
            control={control}
            render={({ field: checkboxField }) => <Checkbox checked={checkboxField.value || false} onCheckedChange={checkboxField.onChange} className="border-gray-600 border-1" />}
          />
        </div>
      </div>
    </>
  );
};

export default GuestForm;
