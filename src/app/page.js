// import Card from "@/component/card";


// export default async function Home() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const json = await res.json()
//   console.log(json)
//   return (
//     <div className="flex items-center gap-4">
//       {
//         json.map((val, ind) => {
//           return <Card post={val} key={ind} />
//         })
//       }
//     </div>
//   );


import Stories from "@/component/Stories";
import Navbar from "@/component/navbar";
import ass1 from "../../public/01.webp";
import ass2 from "../../public/02.jpg";
import ass3 from "../../public/03.jpg";
import ass4 from "../../public/04.jpg";
import ass5 from "../../public/05.jpg";


const games = [
  { title: "GTA 6", image: ass1 },
  { title: "Spider-Man PS5", image: ass2 },
  { title: "God Of War", image: ass3 },
  { title: "The Last of Us", image: ass4 },
  { title: "Elden Ring", image: ass5 },
];

function Home() {
  return (
    <>
      <Navbar/>
      <Stories games={games} />
      
    </>
  )
}

export default Home