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

class Nav extends React.Component {
    render() {
        return(
            <MyNav>
                <Logo class='font-arvo'>LOGO</Logo>
            </MyNav>
        )
    }
}

export default Nav