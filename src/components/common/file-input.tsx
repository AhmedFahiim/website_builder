import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { Button } from "./button";

interface Props extends React.ComponentProps<"input"> {
  wrapperClassName?: string;
  label: string;
}

export function FormFileInput({ className, wrapperClassName, name }: Props) {
  const { setValue, watch } = useFormContext();

  const defaultValue = watch(name as string);

  const [preview, setPreview] = useState<string | null>(defaultValue ?? null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newFileURL = URL.createObjectURL(file);
      setPreview(newFileURL);
      setValue(name as string, newFileURL);
    }
  }, []);

  return (
    <div className={wrapperClassName}>
      <div className="max-w-[200px] space-y-2 mx-auto">
        <Image
          src={preview as string}
          alt="Preview"
          width={200}
          height={200}
          className="rounded border border-gray-200 p-4"
        />

        <Button
          type="button"
          className="w-full"
          onClick={() => inputRef.current?.click()}
        >
          Change Image
        </Button>
      </div>

      <input
        type="file"
        className={className}
        onChange={handleChange}
        hidden
        ref={inputRef}
      />
    </div>
  );
}
