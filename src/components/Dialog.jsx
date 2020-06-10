import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from{
    transform: translateY(200px);
  }
  to{
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  animation: ${(props) => (props.disappear ? fadeOut : fadeIn)} 0.3s ease-out;
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  animation: ${(props) => (props.disappear ? slideDown : slideUp)} 0.3s ease-out;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  visible,
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true => false
    if (localVisible && !visible) {
      setTimeout(() => {
        setLocalVisible(visible);
      }, 300);
    } else {
      setLocalVisible(visible);
    }
  }, [visible, localVisible]);

  if (!localVisible) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  confirmText: 'Confirm',
  cancelText: 'Cancel',
};

export default Dialog;
