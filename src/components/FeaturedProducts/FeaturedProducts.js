import styled from 'styled-components';

const ProductWrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .section {
    display: flex;
    text-align: center;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--clr-green-dark);
    color: var(--clr-green-light);
    padding: 0.75rem 1.5rem;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  .title {
    color: var(--clr-green-dark);
    font-size: 2rem;
  }
`

export default ProductWrapper