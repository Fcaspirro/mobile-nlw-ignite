import { ImageBackground } from 'react-native';

import backroungImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground source={backroungImg}
      style={styles.container}
      defaultSource={backroungImg}
    >
      {children}
    </ImageBackground>
  );
}
