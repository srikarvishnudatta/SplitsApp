import {useMutation, useQuery} from "@tanstack/react-query";
import {resendVerification, verifyUser} from "@/api/http.ts";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {Button} from "@/components/ui/button.tsx";
import { useToast } from "@/hooks/use-toast";


function VerifyAccountPage(){
    const {pathname} = useLocation();
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const email = params.get("email") as string;
    const expiresAt = params.get("expiresAt");
    const {toast} = useToast();
    const {data, isError, isSuccess} = useQuery({
        queryKey: ["verify"],
        queryFn: () => verifyUser(pathname + `?email=${email}&expiresAt=${expiresAt}`)
    });
    useEffect(() =>{
        if (isSuccess){
            toast({
                title:"Verification Complete",
                description:"Account verified Successfully!"
            })
            setInterval(() => {
                navigate("/login")
            }, 3000)
        }
    }, [isSuccess, navigate, toast])
    const {mutate} = useMutation({
        mutationKey:["refetch-link"],
        mutationFn: () => resendVerification(email)
    })
    return <div className={"flex justify-center mt-10"}>
        {data ? <p className={"bg-green-100 p-4"}>Account verified successfully!
        </p>: undefined}
        {isError && <p className={"bg-red-100 p-4"}>
            Sorry the link is expired, please click on the button below to get one
            <Button onClick={() => mutate()}>Resend</Button>
        </p>}
    </div>
}
export default VerifyAccountPage