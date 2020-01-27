import React from 'react'
import styled from 'styled-components'

const MyNav = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgb(255, 255, 153);

    height: 50px;
    width: 100%;
`

const Logo = styled.span `
    font-size: 2em;
    
    box-sizing: border-box;    

    padding: 5px;
`

const Menu = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100%;

    .menu-item {
        display: flex;
        align-items: center;

        box-sizing:border-box;

        height: 100%;
        padding: 0 30px;
           
    }

    .menu-item:hover{
        cursor: pointer;
        background-color: rgb(255, 255, 102);
    }

`

class Nav extends React.Component {
    render() {
        return(
            <MyNav>
                <Logo class='font-arvo'>Logo</Logo>
                <Menu>
                    <a class='menu-item'><span>Home</span></a>
                    <a class='menu-item'><span>About</span></a>
                    <a class='menu-item'><span>Contact</span></a>
                </Menu>
            </MyNav>
        )
    }
}

export default Nav