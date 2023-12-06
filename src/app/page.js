import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl  text-center">Welcome to next level Data fetching module</h1>
     <div className=" flex justify-center gap-10  my-12">
     <Link href="/users"><button className="btn btn-primary">Users</button></Link> 
      <Link href="/posts"><button className="btn btn-secondary">Posts</button></Link> 
     </div>
    </div>
  )
}
