import Image from "next/image"
import Message from "../components/Message"

const About = () => {
    <Message />
    return (
        <div>
            <div className="d-flex justify-content-center m-5">
                <Image src={
                "https://images.unsplash.com/photo-1673297180075-411992cad941?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                width={500} 
                height={500} 
                alt="art"/>
            </div>
            <h3>
                About US
            </h3>
            <p>
                Veniam minim nisi est aliqua elit nisi deserunt sint exercitation minim non velit. Adipisicing commodo nulla laboris cillum elit commodo enim consequat cupidatat occaecat pariatur nostrud. Reprehenderit veniam ex quis sint qui magna nisi ut elit qui dolore dolore officia. Elit aliqua excepteur cupidatat dolore consectetur. Cupidatat ad deserunt proident amet do.
            </p>
        </div>
    )
}

export default About