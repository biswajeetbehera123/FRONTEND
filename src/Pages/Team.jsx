import React from 'react'
import tech1 from "../assets/images/tech1.png"
import director from "../assets/images/director.jpg"
import dean from "../assets/images/dean.jpg"
import sacp from "../assets/images/sac.jpg"
import "./Team.css"

const Team = () => {
    const tech = [
        {
            id: 1,
            title: "Priyanshu Kumar Panda",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Biswajeet Behera",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Sai Ram Senapati",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 4,
            title: "Sneha Sahu",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 5,
            title: "Pabitra Kumar Bebartta",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 6,
            title: "Adarsh Agarwal",
            desg: "Technical Team",
            src: tech1,
        },
        {
            id: 7,
            title: "Vidit Kushwaha",
            desg: "Technical Team",
            src: tech1,
        },
    ]

    const event = [
        {
            id: 1,
            title: "Brijesh Mishra",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Siba Sankar Pradhan",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Mahesh Prasad Sahu",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 4,
            title: "Mukesh Kumar Sahu",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 5,
            title: "Pasupathi Nad",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 6,
            title: "Banothu Nithiesh Naik ",
            desg: "Event Management Team",
            src: tech1,
        },
        {
            id: 7,
            title: "Harsh Baid",
            desg: "Event Management Team",
            src: tech1,
        },
    ]

    const design = [
        {
            id: 1,
            title: "Asutosh Ranjan",
            desg: "Design & Video Editing Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Biswaprakash Bahinipati",
            desg: "Design & Video Editing Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Rahul Ranjan Dash",
            desg: "Design & Video Editing Team",
            src: tech1,
        },
        {
            id: 4,
            title: "Sabitu Datta",
            desg: "Design & Video Editing Team",
            src: tech1,
        },
        {
            id: 5,
            title: "Shubham Padaval",
            desg: "Design & Video Editing Team",
            src: tech1,
        },
    ]

    const travel = [
        {
            id: 1,
            title: "Jagyaraj Pattnaik",
            desg: "Travel & Logistic Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Soumyakanta Prusty",
            desg: "Travel & Logistic Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Shreyas Pradhan",
            desg: "Travel & Logistic Team",
            src: tech1,
        }
    ]

    const pr = [
        {
            id: 1,
            title: "Ansuman Mahapatra",
            desg: "PR Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Abhinav Arunesh",
            desg: "PR Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Jharendra Sunani",
            desg: "PR Team",
            src: tech1,
        },
    ]

    const guest = [
        {
            id: 1,
            title: "Sonali Pradhan",
            desg: "Guest Hospitality & Workshop Team",
            src: tech1,
        },
        {
            id: 2,
            title: "Aiswarya R Behera",
            desg: "Guest Hospitality & Workshop Team",
            src: tech1,
        },
        {
            id: 3,
            title: "Prayag Sahoo",
            desg: "Guest Hospitality & Workshop Team",
            src: tech1,
        },
    ]

    return (
        <>
            <div className='w-full h-full bg-black pt-16 flex flex-col justify-center items-center pb-10 -z-50'>
                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] -z-0'>
                    <div className='text-5xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223]'>Our Patron</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-12 px-24'>
                        <div className='flex items-center flex-wrap gap-8 justify-center'>
                            <div className="profile-card">
                                <div className="img">
                                    <img src={director} alt="" />
                                </div>
                                <div className="caption">
                                    <h3>K. Umamaheswar Rao</h3>
                                    <p>Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%]'>
                    <div className='text-5xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223]'>SAC Officials</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-12'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            <div className="profile-card">
                                <div className="img">
                                    <img src={dean} alt="" />
                                </div>
                                <div className="caption">
                                    <h3>Sidharth S. Jena</h3>
                                    <p>Dean (SW)</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <div className="img">
                                    <img src={sacp} alt="" />
                                </div>
                                <div className="caption">
                                    <h3>Poonam Singh</h3>
                                    <p>SAC President</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-7xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] mt-10'>Core Team</div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>Technical Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {tech.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>Event Management Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {event.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>Design & Video Editing Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {design.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>Travel & Logistics Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {travel.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>PR Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {pr.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center before:blur-md mt-8 w-[85%] justify-center'>
                    <div className='text-4xl flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#F22223] pb-6'>Guest Hospitality & Workshop Team</div>

                    <div className='bg-gray-400 w-fit flex items-center justify-center h-fit rounded-xl mt-6 py-14'>
                        <div className='flex items-center flex-wrap gap-8 justify-center pt'>
                            {guest.map(({ id, title, desg, src }) => (
                                <div className="profile-card" key={id}>
                                    <div className="img">
                                        <img src={src} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>{title}</h3>
                                        <p>{desg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team
