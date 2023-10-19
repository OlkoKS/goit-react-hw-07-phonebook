import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ColorRing
        visible="true"
        height="120"
        width="120"
        aria-label="blocks-loading"
        wrapper-style={{}}
        wrapper-class="blocks-wrapper"
        colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
      />
    </Wrapper>
  );
};
