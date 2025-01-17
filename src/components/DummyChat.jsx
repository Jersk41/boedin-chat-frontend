
const DummyChat = ({ user, msg}) => {
    return (
        <div className=" px-6">
            <div className="relative max-w-full min-h-4 bg-accent p-4 rounded-md">
                { /* <span className="absolute top-0 -left-4 w-0 h-0 border-l-[20px] border-l-blue-500 border-r-[20px] border-r-transparent border-b-[20px] border-b-transparent "></span> */ }
                <svg className="absolute top-0 -left-4 w-[20px]" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>tail-in</title><path opacity="0.13" fill="#ff738a" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="#ff738a" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                <p className="font-bold w-max text-black">{user}</p>
                <p className="font-normal text-black break-words">{msg}</p>
            </div>
        </div>
    )
}

export default DummyChat
