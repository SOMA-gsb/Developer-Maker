import './WebIntro.css'
import { abilityIcon, curriculumIcon, examIcon, webIcon } from '../../assets/introduction'
import SummaryIntro from './SummaryIntro';
import DetailIntro from './DetailIntro'
import MainSubtitle from './MainSubtitle';

function WebIntro() {
    const summaryIntro = [
        {
            icon: curriculumIcon,
            title: 'Curriculum',
            content: ['Provide A Curriculum', 'Tailored To Each Level Of', 'User’s Algorithm']
        },
        {
            icon: examIcon,
            title: 'Mock Exam',
            content: ['Provide Mock Tests To Prepare', 'For Algorithm Competitions', 'And Evaluate Algorithm Skills']
        },
        {
            icon: abilityIcon,
            title: 'Ability Indicators',
            content: ["Visualize User's Algorithm Skills", 'And Provide Mock Test', 'Performance Trends']
        }
    ]

    const detailIntro = [
        {
            subtitle: 'KEY FEATURES, Curriculum',
            title: 'Follow The Curriculum And Grow Your Algorithm Skills',
            class: 'detail-curriculum',
            content: ['We provide each algorithmic curriculum tailored', 'to the user level. You can learn from basic', 'problems to application problems.']
        },
        {
            subtitle: 'KEY FEATURES, Mock Exam',
            title: 'Check Your Skills Through A Mock Test',
            class: 'detail-exam',
            content: ['We provide simulation tests through', 'the core set algorithm.', 'You can check your overall algorithm skills', 'and receive analysis data of the results', 'of the mock test.']
        },
        {
            subtitle: 'KEY FEATURE, Ability Indicators',
            title: 'Check The Algorithmic Analysis And Figure Out Your Skills',
            class: 'detail-ability',
            content: ["We visualize and provide the level of each user's algorithm.", 'And it shows the mock test scores in a graph.', 'You can easily grasp your algorithm skills and', 'study smoothly by setting goals.']
        }
    ]

    return (
        <div className="web-intro">
            <MainSubtitle icon={webIcon} content={'WEB Service'} />
            <div className='web-intro-summary'>
                {summaryIntro.map((intro, index) => {
                    return (
                        <SummaryIntro key={index} icon={intro.icon} title={intro.title}>
                            {intro.content.map((content, index) => {
                                return (
                                    <span key={index}>{content}<br/></span>
                                )
                            })}
                        </SummaryIntro>
                    )
                })}
            </div>
            {
                detailIntro.map((intro, index) => {
                    return (
                        <DetailIntro key={index} subtitle={intro.subtitle} title={intro.title} class={intro.class}>
                            {intro.content.map((content, index) => {
                                return (
                                    <span key={index}>{content}<br/></span>
                                )
                            })}
                        </DetailIntro>
                    )
                })
            }
        </div>
    );
};

export default WebIntro;