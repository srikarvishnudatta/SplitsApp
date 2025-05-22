import { Button } from "../ui/button";
import logo from "@/assets/apple-icon.svg";

function AppleButton() {
  return (
    <Button variant={"secondary"} className="w-full py-6" type="button">
           <img src={logo} alt="website logo" height={25} width={25}/>
           Apple
    </Button>
  )
}

export default AppleButton