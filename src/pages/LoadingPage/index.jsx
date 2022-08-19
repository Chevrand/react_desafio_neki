//Components
import { MainContainer } from './../../components/MainContainer/styles';

//Lottie
import Lottie from 'react-lottie';
import animation from '../../assets/loading.json'

//Styles
import colors from '../../themes/colors';

const LoadingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };

    return (
        <MainContainer style={{ justifyContent: 'center', alignItems: 'center'}}>
            <div style={{
                    backgroundColor: colors.tertiary,
                    width: '25rem',
                    borderRadius: '50rem',
                }}
            >
                <Lottie options={defaultOptions} height={400} width={400} speed={2} />
            </div>
        </MainContainer>
    )
};

export default LoadingPage;