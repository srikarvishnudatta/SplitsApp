import { Button } from "./ui/button"
import logo from "@/assets/google-icon.svg";
function GoogleButton() {
  return (
    <Button variant={"secondary"} className="w-full py-6" type="button">
        <img src={logo} alt="website logo" height={25} width={25}/> Google
    </Button>
  )
}

export default GoogleButton