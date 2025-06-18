"use client";

import { Button } from "@/components/common/button";
import Modal from "@/components/common/modal";
import { Plus } from "lucide-react";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useCreateProject } from "./helpers/use-create-project";
import FormInput from "@/components/common/input";

export default function CreateNewProject() {
  const { form, openCreateModal, onSwitchModalState, onSubmitProjectData } =
    useCreateProject();

  return (
    <>
      <Button
        endIcon={<Plus />}
        className="bg-gray-800"
        onClick={onSwitchModalState}
      >
        Add New Project
      </Button>

      <Modal
        isOpen={openCreateModal}
        onOpenChange={onSwitchModalState}
        title="Add New Project"
        contentClassName="lg:!max-w-[60%]"
      >
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmitProjectData)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput name="title" label="Name" />
              <FormInput name="description" label="Description" />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button
                variant={"outline"}
                type="button"
                onClick={onSwitchModalState}
              >
                Cancel
              </Button>
              <Button type="submit">Save Section</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
