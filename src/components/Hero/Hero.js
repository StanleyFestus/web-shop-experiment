import styled from 'styled-components';

const Wrapper = styled.section`
min-height: 60vh;
display: grid;
place-items: center;
.img-container {
  display: none;
}
p {
  line-height: 2;
  max-width: 45em;
  margin-bottom: 2rem;
  color: var(--clr-grey-5);
  font-size: 1rem;
}
@media (min-width: 992px) {
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  h1 {
    color: var(--clr-green-dark);
    text-transform: capitalize;
    font-size: 4rem;
  }

  p {
    color: var(--clr-green-dark);
    padding-top: 3rem;
    font-size: 1.2rem;
    width: 500px;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: var(--clr-green-light);
    background-color: var(--clr-green-dark)
;  }
  .img-container {
    display: block;
    position: relative;
  }
  .main-img {
    width: 80%;
    height: 550px;
    margin-left: -40px;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }
  .accent-img {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 250px;
    transform: translateX(-50%);
    border-radius: var(--radius);
  }
  .img-container::before {
    content: '';
    position: absolute;
    width: 10%;
    height: 80%;
    background: var(--clr-primary-9);
    bottom: 0%;
    left: -8%;
    border-radius: var(--radius);
  }
}
`

export default Wrapper;