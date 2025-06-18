import { Button } from "@/components/common/button";
import { FormFileInput } from "@/components/common/file-input";
import FormInput from "@/components/common/input";
import Modal from "@/components/common/modal";
import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  editControl: TSection | null;
  setEditControl: React.Dispatch<React.SetStateAction<TSection | null>>;
  onUpdateSectionData: (values: TSection["contentData"]) => void;
}

export default function EditSectionModal({
  editControl,
  setEditControl,
  onUpdateSectionData,
}: Props) {
  const form = useForm({
    defaultValues: { ...editControl?.contentData },
  });

  const onCloseModal = useCallback(() => setEditControl(null), []);

  const drawFormInputs = useCallback(
    (name: string, type: string, content: TContentDataItem["content"]) => {
      switch (type) {
        case "text":
          return (
            <FormInput
              label={name}
              name={`${name}.content`}
              wrapperClassName="col-span-12 lg:col-span-6"
            />
          );

        case "file":
          return (
            <FormFileInput
              label={name}
              name={`${name}.content`}
              wrapperClassName="col-span-12"
            />
          );

        case "array":
          return (
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {(content as TLinks).map((item, idx: number) => (
                <div
                  key={idx}
                  className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <FormInput
                    label={`href No. ${idx + 1}`}
                    name={`${name}.content.${idx}.href`}
                  />
                  <FormInput
                    label={`name No. ${idx + 1}`}
                    name={`${name}.content.${idx}.name`}
                  />
                </div>
              ))}
            </div>
          );
      }
    },
    [editControl]
  );

  return (
    <Modal
      isOpen
      onOpenChange={onCloseModal}
      contentClassName="lg:!max-w-[60%] mx-auto"
    >
      <h2>Edit Section: {editControl?.name}</h2>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onUpdateSectionData)}>
          <div className="grid grid-cols-12 gap-6 my-6">
            {editControl?.contentData &&
              Object.entries(editControl.contentData).map(([name, value]) =>
                drawFormInputs(name, value.type, value?.content)
              )}
          </div>
          <div className="flex justify-end gap-4">
            <Button variant={"outline"} type="button" onClick={onCloseModal}>
              Cancel
            </Button>
            <Button type="submit">Save Section</Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
