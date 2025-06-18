import { Button } from "@/components/common/button";
import { useDesignLayout } from "@/hooks/use-layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectCard = ({
  slug,
  title,
  cover,
  createdAt,
  description,
  lastUpdate,
}: TProject) => {
  const { setLayout } = useDesignLayout();
  const { push } = useRouter();

  const onEditProject = () => {
    setLayout([]);
    void push(`/projects/${slug}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Link href={`/projects/${slug}`}>
        <Image
          src={cover}
          width={1200}
          height={1200}
          alt="project cover"
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="text-lg font-medium text-indigo-500 mb-2">{title}</div>
        <p className="text-gray-500 text-sm line-clamp-3">{description}</p>

        <div className="flex items-center justify-between my-2">
          <span className="text-xs text-gray-700">
            <span className="text-indigo-500">Created at:</span>{" "}
            {createdAt.toDateString()}
          </span>
          <span className="text-xs text-gray-700">
            <span className="text-indigo-500">Last update:</span>{" "}
            {lastUpdate.toDateString()}
          </span>
        </div>

        <Button
          className="w-full bg-indigo-500 mt-4 p-2 rounded-lg text-center text-white hover:opacity-85 duration-200"
          onClick={onEditProject}
        >
          Edit Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
