export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl h-screen container mx-auto bg-blue-300">
      {children}
    </div>
  );
}
