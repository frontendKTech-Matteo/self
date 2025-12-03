import Image from "next/image";

interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
}

export default function UserAvatar({ name, image }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-medium">{name}</p>
      {image && (
        <Image
          src={image}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
    </div>
  );
}
