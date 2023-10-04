import ExtensionIntro from "./ExtensionIntro";
import IntroPs from "./IntroPs";
import MainIntro from "./MainIntro";
import WebIntro from "./WebIntro";

function Intro() {
    return(
        <>
            <MainIntro />
            <WebIntro />
            <ExtensionIntro />
            <IntroPs />
        </>
    )
};

export default Intro;