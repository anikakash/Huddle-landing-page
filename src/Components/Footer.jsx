import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"
import SocialIcons from "./SocialIcons"



export default function Footer(){
    return(
        <StyledFooter>
            <Container>
                <img src="logo_white.svg" alt="" />

                <Flex>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum magnam.
                            orum velit, temporibus quae numquam unde blandit
                        </li>
                        <li>+8801710185804</li>
                        <li>anik@example.com</li>
                    </ul>

                    <ul>
                        <li>About US</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons/>
                </Flex>

                <p>&copy; 2025 Huddle. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}