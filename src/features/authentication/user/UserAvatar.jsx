import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Img = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
  cursor: pointer;
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const navigate = useNavigate();

  return (
    <StyledUserAvatar>
      <Img
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        onClick={() => navigate("/account")}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
