import Card from "@/component/card";


export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const json = await res.json()
  console.log(json)
  return (
    <div className="flex items-center gap-4">
      {
        json.map((val, ind) => {
          return <Card post={val} key={ind} />
        })
      }
    </div>
  );
}
