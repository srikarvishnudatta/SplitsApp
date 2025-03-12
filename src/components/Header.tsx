import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button"
import logo from "/icons8-money-50.png"
function Header() {
    const navigate = useNavigate();
  return (
        <header className={"flex justify-between pt-4"}>
            <div className={"flex items-center gap-2 cursor-pointer"} onClick={() => navigate("/")}>
                <img src={logo} alt="" className={"self-center"}/>
                <h2 className={"text-black font-semibold text-2xl"}>
                    Splits
                </h2>
                <Button variant={"link"} className="text-md">
                    Learn more
                </Button>
            </div>
            <div className="space-x-2">
            <Button
                       onClick={() => navigate("/login")}>
                       Login
                   </Button>
                    <Button variant={"outline"} className={"border border-blue-960"}
                            onClick={() => navigate("/create")}>
                        Join us Today
                    </Button>
            </div>
        </header>
  )
}

export default Header