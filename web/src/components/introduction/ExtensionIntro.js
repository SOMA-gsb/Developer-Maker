import MainSubtitle from "./MainSubtitle";
import ExtensionDetail from "./ExtensionDetail";
import { chromeIcon, extensionEx } from "../../assets/introduction";
import './ExtensionIntro.css'

function ExtensionIntro() {
    const extensionDetails = [
        {
            class: 'extension-tag',
            title: 'Algorithm Tag Prediction',
            content: ['When we receive a description of', 'the problem, we provide the algorithm', 'tag prediction result for the problem']
        },
        {
            class: 'extension-recommend',
            title: 'Algorithm Problem Recommendation',
            content: ['We provide the preceding, following,', 'and similar problems for the problems', 'you are currently solving.']
        },
        {
            class: 'extension-timer',
            title: 'Timer And Stopwatch',
            content: ['We provide timers and stopwatches.', 'Timer history is saved so you can', 'continue to solve the problem later.']
        }
    ];

    return (
        <div className="extension-intro">
                <MainSubtitle icon={chromeIcon} content={'Extension Service'} />
                <div id="extension-intro-contents">
                    <div id="extension-title">
                        Let's Solve Algorithm Problems Together !
                    </div>
                    <div id="extension-content">
                        We offer a Chrome extension service.<br/>This will help you solve the problem.
                    </div>
                </div>
                <img id="extension-image" className="extension-intro-img" src={extensionEx} alt="extension example"/>
                <div className="extension-intro-details">
                    {extensionDetails.map((detail, index) => {
                        return (
                            <ExtensionDetail key={index} class={detail.class} title={detail.title}>
                                {detail.content.map((content, index) => {
                                    return (
                                        <span key={index}>{content}<br/></span>
                                    )
                                })}
                            </ExtensionDetail>
                        )
                    })}
                </div>
        </div>
    );
};

export default ExtensionIntro;