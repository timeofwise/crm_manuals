import GetTokenBtn from "../getTokenBtn/GetTokenBtn";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from './AccessibleAgents.module.css';

export default function AccessibleAgents({
    language,
    handleInputToken,
    token,
    auth,
    head=false,
    branch=false,
    seller=false,
    agent=false,
    customer=false,
}) {

    

    //console.log('language');
    //console.log(language);
    const TEXT = {
        ko: {
            targetViewer:"열람 대상은 다음과 같습니다.",
            hq:'본사',
            branch:'법인',
            seller:'자재거점',
            agent:'대리점',
            customer:'고객',
        },
        en: {
            targetViewer:"The list of readers is as follows",
            hq:'Head Office',
            branch:'Branch',
            seller:'Service Parts Base',
            agent:'Service Agent',
            customer:'Customer',
        },
        zh: {
            targetViewer:"读者名单如下",
            hq:'总部',
            branch:'HTS',
            seller:'配件销售基地',
            agent:'代理商',
            customer:'客户',
        },
    }

    const userText = TEXT[language];
    

    return <BrowserOnly>{
        () => (
            <div className={styles.alertContainer} style={{marginBottom:'1em!important'}}>
                <div className="theme-admonition theme-admonition-note admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--secondary">
                    <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">

                        <span>📢 {userText.targetViewer}</span>
                        <div style={{float:'right'}}>
                            <GetTokenBtn inputToken={handleInputToken} token={token} auth={auth} />
                        </div>
                    </div>
                    <div className="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
                        <ul className="contains-task-list containsTaskList_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Ul-styles-module">
                            <li className="task-list-item">
                                <input type="checkbox" disabled checked={head} /> 
                                <strong> {userText.hq}</strong>
                                </li>
                            <li className="task-list-item">
                                <input type="checkbox" disabled checked={branch} /> 
                                <strong> {userText.branch}</strong>
                            </li>
                            <li className="task-list-item">
                                <input type="checkbox" disabled checked={seller} /> 
                                <strong> {userText.seller}</strong>
                            </li>
                            <li className="task-list-item">
                                <input type="checkbox" disabled checked={agent} /> 
                                <strong> {userText.agent}</strong>
                            </li>
                            <li className="task-list-item">
                                <input type="checkbox" disabled checked={customer} /> 
                                <strong> {userText.customer}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </BrowserOnly>
};