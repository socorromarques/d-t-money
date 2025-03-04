import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/logo-1.svg'


export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <button>Nova Transação</button>
                </HeaderContent>
        </HeaderContainer>
    )
}