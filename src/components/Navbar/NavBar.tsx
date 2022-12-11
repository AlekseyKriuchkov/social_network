import navbar from "./Navbar.module.css";

export const NavBar = ()=>{
    return (
        <div className={navbar.navbar}>
            <div className={navbar.item}>Profile</div>
            <div className={navbar.item}>Messages</div>
            <div className={navbar.item}>News</div>
            <div className={navbar.item}>Music</div>
        </div>
    )
}