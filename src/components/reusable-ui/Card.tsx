import styled from "styled-components";
import { formatDate } from "../../utils/formatDate";

type CardType = {
  src: string;
  alt: string;
  title: string;
  type: "EVENT" | "ROOM" | "OPENSPACE" | "OFFICE";
  description: string;
  capacity: number;
  date: string;
};

export default function Card({
  src,
  alt,
  type,
  title,
  description,
  capacity,
  date,
}: CardType) {
  return (
    <CardStyled>
      <img src={src} alt={alt} />
      <div className="content">
        <h2>{type}</h2>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="meta">
          <p>Capacité : {capacity}</p>
          <p>{formatDate(date)}</p>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  max-width: 900px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
  img {
    width: 200px;
    height: 140px;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
    flex: 1;

    h2 {
      font-size: 14px;
      font-weight: 600;
      color: #6c63ff;
      margin: 0 0 4px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 8px 0;
      color: #222;
    }

    p {
      font-size: 14px;
      color: #555;
      margin: 4px 0;
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    p {
      font-size: 13px;
      color: #777;
      margin: 0;
    }
  }
`;
