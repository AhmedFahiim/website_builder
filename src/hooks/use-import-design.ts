import { useDesignLayout } from "./use-layout";

export const useImportDesign = () => {
  const { setLayout } = useDesignLayout();

  const onImportDesign = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const parsedImportedJson = JSON.parse(event.target?.result as string);

        setLayout(parsedImportedJson);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    };
    reader.readAsText(file);
  };

  return onImportDesign;
};
