import Image from "next/image";
import PillNav from "../components/navbar/PillNav"
// import Homepage from "../components/homepage/Homepagecontainer"

export default function Home() {
  return (
    <div>
      <div className="container m-10">
        <PillNav
          className="mt-5"
          initialLoadAnimation
          logo=""
          items={[
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            { label: "Contact", href: "#" },
          ]} 
        />

        {/* <Homepage /> */}
      </div>
    </div>
  );
}
