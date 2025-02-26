import { Info } from 'lucide-react';

type AuthErrorType = {
    message:string;
}

function AuthError({message}:AuthErrorType) {
  return (
    <p className="bg-red-100 p-3 flex items-center gap-1"><Info />{message}</p>
  )
}

export default AuthError