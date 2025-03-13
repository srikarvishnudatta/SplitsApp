
import illustration from "/illustration.png"
function LandingPage(){
   
    return <div className={"flex justify-between items-center mt-20"}>
            <div className={"flex flex-col  gap-4"}>
                <h1 className={"font-bold text-7xl"}>Split expenses for free</h1>
                <p className={"text-2xl font-medium"}>Create. Invite. Split. Settle.</p>
                <div>
                    <h4 className={"text-gray-500 font-medium"}>Made in love ❤️ with:</h4>
                    <ul className={"flex gap-1 text-gray-600 font-semibold"}>
                        <li>React,</li>
                        <li>TailwindCSS,</li>
                        <li>NodeJS,</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={illustration} alt="illustration.png" loading={"lazy"}/>
            </div>
        </div>
}

export default LandingPage