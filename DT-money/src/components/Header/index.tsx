import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img
            src={logoImg}
            alt="Logo do site composta por três triangulos verdes"
          />

          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
