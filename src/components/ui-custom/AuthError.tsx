import { BadgeInfo } from 'lucide-react';

type AuthProps = {
    message:string;
}

function AuthError({message}:AuthProps) {
  return (
    <p className="flex gap-1 items-center text-sm font-light text-red-500"><BadgeInfo size={16}/>{message}</p>
  )
}

export default AuthError