import profile  from './assets/profile.jpg'

export function Info() {
    return (
        <section>
            <div className="profile-container"><img src={profile} className='profile' alt='Head shot of Anthony smiling while looking off camera in front of a blured background' /></div>
            <div className="main-content">
                <h1 className='header'>Anthony Nanfito</h1>
                <h2 className='subheader'>Frontend Developer</h2>
                <p className="website-link"><a href="https://ananfito.github.io/" target='_blank'>ananfito.github.io</a></p>
                <div className='btn-container'>
                    <a className='btn' id='btn-email' href="mailto:msg.for.anthony.p6ht3@simplelogin.com"><i className="fa-solid fa-envelope"></i>Email</a>
                    <a className='btn' id='btn-linkedin' href="https://linkedin.com/in/anthonynanfito" target='_blank'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
            
        </section>
    )
}