async function login(loginData: LoginData){
    try {
        const response = await myFetch(BASE_URL+"auth/login",loginData, "POST");
        const resData : LoginResponse =  await response.json();
        localStorage.setItem("accessToken", resData.accessToken);
    } catch (error) {
        console.log(error);
    }
}
async function signUp(signUpData: SignupData){
    try{
        const resposne = await myFetch(BASE_URL + "auth/signup", signUpData, "POST");
        const resData: PostResponse = await resposne.json();
        return resData;
    }catch(error){
        console.log(error);
    }
}