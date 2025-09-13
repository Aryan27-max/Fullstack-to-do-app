export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full items-center justify-center flex">
      {children}
    </div>
  );
}
