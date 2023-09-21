import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import { useEffect,useState,useContext } from "react";
import Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = () => {
    const[scrolling,setScrolling]=useState(false);
    const onScroll=()=>{
        const yval=window.scrollY;
        if(yval>200){
            setScrolling(true);
        }
        else{
            setScrolling(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
    },[]);
    return(
    <header className={`main-header ${scrolling}?'sticky-header':''`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">shopperZstopperZ</div>
            <div className="right">
                <TbSearch/>
                <AiOutlineHeart/>

                <span className="cart-icon">
                <CgShoppingCart/>
                <span>5</span>
                </span>

            </div>

        </div>
        </header>
        );
};

export default Header;
