import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  item: TSection;
  children: React.ReactNode;
  className?: string;
}

export default function SortableItem({ item, className, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.componentKey });

  const isUnSortableSection = ["header", "footer"].includes(item.type);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return isUnSortableSection ? (
    <div className={className}>{children}</div>
  ) : (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={className}
    >
      {children}
    </div>
  );
}
