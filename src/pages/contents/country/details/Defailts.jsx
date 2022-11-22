import { useNavigate, useParams } from 'react-router-dom';

export const Defailts = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleClick}>Back</button>
      Details {countryId}
    </>
  );
};
