import {StyledHeader, Nav, Logo, Image} from './styles/Header.styled';
import {Container } from './styles/Container.styled';
import {Button} from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

const theme = {
    colors:{
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
}

export default function Header(){
    return(
        <StyledHeader theme = {theme}>
            <Container>
                <Nav>
                    <Logo src="logo.svg" alt=''/>
                    <Button> Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>
                            Huddle re-images the way we build communiteies. You have a voice,
                            but so does your audience. Create connections with your users as you engage in genuine discussion.
                        </p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src='illustration-mockups.svg' alt=''/>

                </Flex>
            </Container>
        </StyledHeader>
    )
}