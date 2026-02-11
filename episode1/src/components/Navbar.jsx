

const Navbar = () =>{
    const links = [
        {
            title: 'Founders',
            href: "#",
        },
        {
            title: 'Guide',
            href: "#",
        },
        {
            title: 'Pricing',
            href: "#",
        },
        {
            title: 'Log In',
            href: "#",
        },

    ]
    return (
        <div className="navbar-root">
          <div>FinTech</div>
          <div>
            {links.map((link,idx)=> (
                <a key={link.title} href={link.href}>{link.title}</a>
            ) )}
          </div>
        </div>
    )
}

export default Navbar;