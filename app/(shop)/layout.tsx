import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
			<div className="flex justify-between container mx-auto pt-5">
				<Link className="text-3xl font-bold" href='/'>Home</Link>
				<div className="flex gap-4 text-xl">
					<Link href='/performance'>Performance</Link>
					<Link href='/reliability'>Reliability</Link>
					<Link href='/scale'>Scale</Link>
				</div>
			</div>
			{children}
    </>
  );
}